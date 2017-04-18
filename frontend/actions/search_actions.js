import * as BizApiUtil from '../util/business_api_util';
import * as CatApiUtil from '../util/category_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const fetchSearchResults = searchTerm => dispatch => {
  let fetchBizes = BizApiUtil.fetchBusinessesByTerm(searchTerm)
    .then(businesses => dispatch(receiveSearchResults({ businesses })));
  let fetchCats = CatApiUtil.fetchCategories(searchTerm)
    .then(categories => dispatch(receiveSearchResults({ categories })));

  return Promise.all([fetchCats, fetchBizes]).then( res => {
    let cats = res[0].searchResults.categories;
    let bizes = res[1].searchResults.businesses;
    let categoryTitles = [];
    let businessTitles = [];
    let allTitles = [];

    cats.concat(bizes).forEach( result => allTitles.push(result.title));
    cats.forEach( cat => categoryTitles.push(cat.title));
    bizes.forEach( biz => businessTitles.push(biz.title));
    dispatch(receiveSearchResults({ allTitles, categoryTitles, businessTitles, searchTerm }));
  });
};

export const receiveSearchResults = searchResults => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults: searchResults
});
