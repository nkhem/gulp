import React from 'react';
import DropdownItem from './dropdown_item';


const DropdownList = props => {
  let { searchTerm, allTitles } = props.searchResults;
  let titles = bestTitles(searchTerm, allTitles);

  return (
    <ul id="search-results">
      { dropdownItems(titles) }
    </ul>
  );
};

const bestTitles = (searchTerm, allTitles)  => {
  let result = [];

  result.push(exactMatches(searchTerm, allTitles));
  return result;
};

const exactMatches = (searchTerm, allTitles) => {
  let result = [];
  const exactMatch = word => word.toLowerCase() === term;
  results.forEach( result => {
    if (result.split(" ").toLowerCase().some(exactMatch)) {
      exactResults.push(result);
    }
  });

  return exactResults;
};

const dropdownItems = (titles) => (titles.map (title => <DropdownItem searchResultTitle={ title } key={ title }/> ));

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
