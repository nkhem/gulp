import * as BizApiUtil from '../util/business_api_util';
import * as CatApiUtil from '../util/category_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const fetchSearchResults = term => dispatch => {
  let fetchBizes = BizApiUtil.fetchBusinesses(term)
    .then(businesses => dispatch(receiveSearchResults({businesses})));
  let fetchCats = CatApiUtil.fetchCategories(term)
    .then(categories => dispatch(receiveSearchResults({categories})));

  return Promise.all([fetchCats, fetchBizes]).then( res => {
    // let matchingCategories = res[0].categories;
    // let matchingBusinesses = res[1].businesses;
    let matchingTitles = ["titles list"];

    let searchResults = {
        currentTerm: term,
        // businesses: matchingBusinesses,
        // categories: matchingCategories,
        allTitles: matchingTitles,
        prevTitles: ["previous titles list"]
    };

    return dispatch(receiveSearchResults(searchResults));
  });
};



export const receiveSearchResults = searchResults => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults: searchResults
});
  //
  // fetchCategories(term)
  //   .then( res => {
  //     res.categories.forEach( cat => results.push(cat.title));
  //   });
  //
  // fetchBusinesses(term)
  //   .then( res => {
  //     res.businesses.forEach( biz => results.push(biz.title));
  //   });
  //
  // return results;
