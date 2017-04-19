import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from '../actions/business_actions';

const nullState = {};

const BusinessesReducer = (state = nullState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_BUSINESSES:
      nextState = Object.assign(
        {},
        nullState,
        action.businesses);
      return nextState;
    case RECEIVE_BUSINESS:
      nextState = Object.assign(
        {},
        nullState,
        action.business);
      return nextState;
    default:
      return state;
  }
};

export default BusinessesReducer;
