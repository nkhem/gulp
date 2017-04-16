import * as ApiUtil from '../util/category_api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export const fetchCategories = term => dispatch => {
  if (term.length > 0) {
    return ApiUtil.fetchCategories(term)
      .then(categories => dispatch(receiveCategories(categories)));
  }
};

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories: categories
});