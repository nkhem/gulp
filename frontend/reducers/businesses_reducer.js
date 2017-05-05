import {
  RECEIVE_BUSINESSES,
  RECEIVE_BUSINESS } from '../actions/business_actions';
import { RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  RECEIVE_REVIEW_ERRORS,
  CLEAR_REVIEW_ERRORS } from '../actions/review_actions';

const initialState = {
  featured: {},
  list: [],
  errors: []
};

const BusinessesReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {

    case RECEIVE_BUSINESSES:
      nextState = Object.assign(
        {},
        state,
        {list: action.businesses});
      return nextState;

    case RECEIVE_BUSINESS:
      nextState = Object.assign(
        {},
        state,
        {featured: action.business});
      return nextState;

    case RECEIVE_REVIEWS:
      let nextFeatured = {
        featured: Object.assign(
          {},
          state.featured,
          {reviews: action.reviews}
        )
      };

      nextState = Object.assign(
        {},
        state,
        nextFeatured
      );
      return nextState;

    case RECEIVE_REVIEW_ERRORS:
      nextState = Object.assign(
        {},
        state,
        { errors: action.errors }
      );

      return nextState;

    case CLEAR_REVIEW_ERRORS:
      nextState = Object.assign(
        {},
        state,
        { errors: [] }
      );

      return nextState;

    default:
      return state;

  }
};

export default BusinessesReducer;
