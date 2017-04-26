import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

export const fetchReviews = businessId => dispatch => {
  return ReviewApiUtil.fetchReviews(businessId)
    .then(reviews => dispatch(receiveReviews(reviews)));
};

export const receiveReviews = categories => ({
  type: RECEIVE_REVIEWS,
  categories: categories
});
