import * as BizApiUtil from '../util/business_api_util';
import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

export const fetchBusinessesByTerm = term => dispatch => {
  term = term.toLowerCase().replace(/[^0-9a-z]/g, '');
  return BizApiUtil.fetchBusinessesByTerm(term)
    .then(businesses => dispatch(receiveBusinesses(businesses)));
};

export const fetchBusinessesByCategory = categoryAlias => dispatch => {
  return BizApiUtil.fetchBusinessesByCategory(categoryAlias)
    .then(businesses => dispatch(receiveBusinesses(businesses)));
};

export const fetchBusiness = term => dispatch => {
  return BizApiUtil.fetchBusiness(term)
    .then(business => dispatch(receiveBusiness(business)));
};

export const fetchReviews = bizId => dispatch => {
  return ReviewApiUtil.fetchReviews(bizId)
    .then(reviews => dispatch(receiveReviews(reviews)));
};

export const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business: business
});

export const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses: businesses
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews: reviews
});
