import React from 'react';
import DropdownItem from './dropdown_item';


const DropdownList = props => {
  let { searchTerm, allTitles } = props.searchResults;
  let titles = bestTitles(searchTerm, allTitles);
// console.log(titles);
  return (
    <ul id="search-results">
      { dropdownItems(titles) }
    </ul>
  );
};

const defaultSuggestions = [
  "Bubble Tea",
  "Coffee",
  "Happy Hour",
  "Kava Lounge",
  "Fresh Juice",
  "Distilleries",
  "Wine Tasting",
  "Tea Rooms"]

const bestTitles = (searchTerm, allTitles)  => {
  let result = [];

  result = result.concat(nearExactMatches(searchTerm, allTitles));

  // while(result.length)
  return result;
};

const exactExactMatches = (searchTerm, allTitles) => {
  let result = [];
  searchTerm = searchTerm.toLowerCase().replace(/[^0-9a-z]/g, "");
  allTitles.forEach( title => {
    
  });

};

const nearExactMatches = (searchTerm, allTitles) => {
  let result = [];
  let searchWords = searchTerm.toLowerCase().split(/[^0-9a-z]/g);

  allTitles.forEach( title => {
    let titleWords = title.toLowerCase().split(/[^0-9a-z]/g);
    let isExactSearchMatch = word => Boolean(searchWords.includes(word));
    let titleWordsContainsMatch = titleWords.some(word => isExactSearchMatch(word));

    if (titleWordsContainsMatch) result.push(title);
  });

  return result;
};

const dropdownItems = (titles) => (
  titles.map(title => {
    return <DropdownItem searchResultTitle={ title } key={ title }/>;
  })
);

export default DropdownList;

  //
  // topResults(results, term){
  //   // const topResults = [];
  //   // const exactResults = [];
  //   // const exactMatch = word => {
  //   //   return word === term.toLowerCase().replace(/[^a-z]/g, "");
  //   // };
  //   // results.forEach( result => {
  //   //   if (_.map(result.split(" "), word => word.toLowerCase().replace(/[^a-z]/g, "")).some(exactMatch)) {
  //   //
  //   //     exactResults.push(result);
  //   //   }
  //   // });
  //   // // include all results that have a whole word that matches term exactly
  //   // topResults.push(this.exactResults(results, term));
  //   //
  //   // // up to 9, include results that have matches to starts of words
  //   // while (topResults.length < 9){
  //   //   topResults.push(this.goodResults(results, term, topResults));
  //   // }
  //   // // up to 6, include other matches
  //
  // }
  //
  // exactResults(results, term){
  //   // const exactResults = [];
  //   // const exactMatch = word => word.toLowerCase() === term;
  //   // results.forEach( result => {
  //   //   if (result.split(" ").toLowerCase().some(exactMatch)) {
  //   //     exactResults.push(result);
  //   //   }
  //   // });
  //   //
  //   // return exactResults;
  // }
  //
  // goodResults(results, term, topResults){
  //   // const goodResults = [];
  //   // results.forEach( result => {
  //   //   result.split(" ").forEach( word => {
  //   //     const isGoodMatch = Boolean(
  //   //       word.toLowerCase().match(term).index === 0
  //   //     );
  //   //     const isUniqMatch = !topResults.includes(result);
  //   //
  //   //     if (isGoodMatch && isUniqMatch){
  //   //       goodResults.push(result);
  //   //     }
  //   //   });
  //   // });
  //   // return goodResults;
  // }
