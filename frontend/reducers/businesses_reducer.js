import { RECEIVE_BUSINESSES } from '../actions/business_actions';

const initialState = {};

const BusinessesReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;
  
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      nextState = Object.assign(
        {},
        state,
        action.businesses);
      return nextState;
    default:
      return state;
  }
};

export default BusinessesReducer;
