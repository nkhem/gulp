import * as BizApiUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

export const fetchBusinessesByTerm = term => dispatch => {
  term = term.toLowerCase().replace(/[^0-9a-z]/g, '');
  return BizApiUtil.fetchBusinessesByTerm(term)
    .then(businesses => dispatch(receiveBusinesses(businesses)));
};

export const fetchBusiness = term => dispatch => {
  // term = term.toLowerCase().replace(/[^0-9a-z]/g, '');
  // return BizApiUtil.fetchBusinessesByTerm(term)
  //   .then(businesses => dispatch(receiveBusinesses(businesses)));
};

export const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business: business
});

export const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses: businesses
});
