import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

export const fetchReviews = bizId => dispatch => {
  return ReviewApiUtil.fetchReviews(bizId)
    .then(reviews => dispatch(receiveReviews(reviews)));
};

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews: reviews
});
