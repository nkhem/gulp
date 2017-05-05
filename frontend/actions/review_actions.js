import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

export const fetchReviews = bizId => dispatch => {
  return ReviewApiUtil.fetchReviews(bizId)
    .then(reviews => dispatch(receiveReviews(reviews)));
};

export const createReview = review => dispatch => {
  return ReviewApiUtil.createReview(review)
    .then( () => ReviewApiUtil.fetchReviews(review.businessId))
    .then(reviews => dispatch(receiveReviews(reviews)), errors => {
      dispatch(receiveReviewErrors(errors.responseJSON));
    });
};

export const deleteReview = review => dispatch => {
  return ReviewApiUtil.deleteReview(review)
    .then( () => ReviewApiUtil.fetchReviews(review.business_id))
    .then(reviews => dispatch(receiveReviews(reviews)));
};

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews: reviews
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors: errors
});

export const clearReviewErrors = currentUser => {
  return {
    type: CLEAR_REVIEW_ERRORS
  };
};
