import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchReviews = bizId => dispatch => {
  return ReviewApiUtil.fetchReviews(bizId)
    .then(reviews => dispatch(receiveReviews(reviews)));
};

export const createReview = review => dispatch => {
  return ReviewApiUtil.createReview(review)
    .then( () => ReviewApiUtil.fetchReviews(review.businessId))
    .then(reviews => dispatch(receiveReviews(reviews)), errors => {
      dispatch(receiveErrors(errors.responseJSON));
    });
};

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews: reviews
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: errors
});
