import * as BizApiUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";

export const fetchBusinesses = term => dispatch => {
  term = term.toLowerCase().replace(/[^0-9a-z]/g, '');
  return BizApiUtil.fetchBusinesses(term)
    .then(businesses => dispatch(receiveBusinesses(businesses)));
};

export const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses: businesses
});
