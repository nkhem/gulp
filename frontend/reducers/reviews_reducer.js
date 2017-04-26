import { RECEIVE_REVIEWS } from '../actions/reviews_actions';

const initialState = {};

const ReviewsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_REVIEWS:
      nextState = Object.assign(
        {},
        state,
        action.reviews
      );
      return nextState;
    default:
      return state;
  }
};

export default ReviewsReducer;
