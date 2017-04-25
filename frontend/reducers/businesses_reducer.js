import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from '../actions/business_actions';

const initialState = {
  featured: [],
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
    default:
      return state;
  }
};

export default BusinessesReducer;
