import React from 'react';
import DropdownItem from './dropdown_item';

const DropdownList = props => (
  <ul>
    <li>{props.cat}</li>
    <DropdownItem />
  </ul>
);

export default DropdownList;

  //
  // bestResults(results, term){
  //   // const bestResults = [];
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
  //   // bestResults.push(this.exactResults(results, term));
  //   //
  //   // // up to 9, include results that have matches to starts of words
  //   // while (bestResults.length < 9){
  //   //   bestResults.push(this.goodResults(results, term, bestResults));
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
  // goodResults(results, term, bestResults){
  //   // const goodResults = [];
  //   // results.forEach( result => {
  //   //   result.split(" ").forEach( word => {
  //   //     const isGoodMatch = Boolean(
  //   //       word.toLowerCase().match(term).index === 0
  //   //     );
  //   //     const isUniqMatch = !bestResults.includes(result);
  //   //
  //   //     if (isGoodMatch && isUniqMatch){
  //   //       goodResults.push(result);
  //   //     }
  //   //   });
  //   // });
  //   // return goodResults;
  // }
