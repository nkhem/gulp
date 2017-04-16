import * as ApiUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";

export const fetchBusinesses = term => dispatch => {
  if (term.length > 0) {
    return ApiUtil.fetchBusinesses(term)
      .then(businesses => dispatch(receiveBusinesses(businesses)));
  }
};

export const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses: businesses
});
