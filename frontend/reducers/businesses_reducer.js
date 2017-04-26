import {
  RECEIVE_BUSINESSES,
  RECEIVE_BUSINESS,
  RECEIVE_REVIEWS } from '../actions/business_actions';

const initialState = {
  featured: {},
  list: []
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

    default:
      return state;

  }
};

export default BusinessesReducer;
