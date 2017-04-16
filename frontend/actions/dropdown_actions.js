import * as BizApiUtil from '../util/business_api_util';
import * as CatApiUtil from '../util/category_api_util';

import { receiveCategories } from './category_actions';
import { receiveBusinesses } from './business_actions';

export const RECEIVE_TERM_MATCHES = 'RECEIVE_TERM_MATCHES';

export const fetchTermMatches = term => dispatch => {
  let fetchBizes = BizApiUtil.fetchBusinesses(term).then(businesses => dispatch(receiveBusinesses(businesses)));
  let fetchCats = CatApiUtil.fetchCategories(term).then(categories => dispatch(receiveCategories(categories)));

  return Promise.all([fetchCats, fetchBizes]).then( searchResults => {
    let matchingCategories = searchResults[0].categories;
    let matchingBusinesses = searchResults[1].businesses;
    let matchingTitles = [];

    let termMatches = {
        categories: matchingCategories,
        businesses: matchingBusinesses,
        titles: matchingTitles
    };

    return dispatch(receiveTermMatches(termMatches));
  });
};

export const receiveTermMatches = termMatches => ({
  type: RECEIVE_TERM_MATCHES,
  termMatches: termMatches
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
