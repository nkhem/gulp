import React from 'react';
import DropdownItem from './dropdown_item';
import _ from 'lodash';

class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.renderDropdownItems = this.renderDropdownItems.bind(this);
  }

  renderDropdownItems(titles){
    return titles.map(title => {
      return <DropdownItem
        itemTitle={ title }
        key={ title }
        searchResults={this.props.searchResults}
        fetchSearchResults={ this.props.fetchSearchResults }
        fetchBusinessesByCategory={this.props.fetchBusinessesByCategory}
        fetchBusiness={this.props.fetchBusiness} />;
    });
    }

  render() {
    if (this.props.searchResults && this.props.shouldRenderDropdown) {
      let { searchTerm, allTitles } = this.props.searchResults;
      let titles = (searchTerm === "" ? [] : bestTitles(searchTerm, allTitles));

      return (
        <ul className="dropdown-list">
          { this.renderDropdownItems(titles) }
        </ul>
      );
    } else {
      return null;
    }
  }

}

const bestTitles = (searchTerm, allTitles)  => (
  _.uniq(exactMatches(searchTerm, allTitles)
    .concat(goodMatches(searchTerm, allTitles)))
    .slice(0, 6)
);

const exactMatches = (searchTerm, allTitles) => {
  let result = [];
  let searchTermAlias = searchTerm.toLowerCase().replace(/[^0-9a-z]/g, "");

  allTitles.forEach( title => {
    let titleAlias = title.toLowerCase().replace(/[^0-9a-z]/g, "");
    let isExactMatch = (titleAlias === searchTermAlias);
    if (isExactMatch && !result.includes(title)) result.push(title);
  });

  return result;
};

const goodMatches = (searchTerm, allTitles) => {
  let titlesWithMatchingWord = [];
  let titlesWithSimilarWord = [];
  let titlesWithMultipleGreatWords = [];
  let titlesWithMultipleGoodWords = [];

  let searchWords = searchTerm.toLowerCase().split(/[^0-9a-z]/g);
  searchWords = searchWords.filter( word => word !== "");

  allTitles.forEach( title => {
    let titleWords = title.toLowerCase().split(/[^0-9a-z]/g);

    let isMatchingWord = word => Boolean(searchWords.includes(word));
    let isSimilarWord = titleWord => {
      return searchWords.some( searchWord => {
        return titleWord.match(searchWord) && titleWord.match(searchWord).index === 0
      });
    };

    let matchingWordCount = _.countBy(titleWords, (word) => isMatchingWord(word))['true'];
    let similarWordCount = _.countBy(titleWords, (word) => isSimilarWord(word))['true'];

    if (matchingWordCount >= 2) {
      titlesWithMultipleGreatWords.push(title);
    } else if (matchingWordCount === 1 && similarWordCount === 1) {
      titlesWithMultipleGoodWords.push(title);
    } else if (matchingWordCount === 1) {
      titlesWithMatchingWord.push(title);
    } else if (similarWordCount === 1) {
      titlesWithSimilarWord.push(title);
    }

  });

  return _.uniq(titlesWithMultipleGreatWords
    .concat(titlesWithMultipleGoodWords)
    .concat(titlesWithMatchingWord)
    .concat(titlesWithSimilarWord));
};

export default DropdownList;
