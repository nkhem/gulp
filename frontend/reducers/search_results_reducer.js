import { RECEIVE_TERM_MATCHES } from '../actions/business_actions';

const nullMatches = {
  termMatches: {
    categories: [],
    businesses: [],
    titles: []
    // prevTitles: []
  }
};

const BusinessesReducer = (state = nullMatches, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_TERM_MATCHES:
      nextState = Object.assign(
        {},
        state,
        { termMatches: action.termMatches });
      return nextState;
    default:
      return state;
  }
};

export default BusinessesReducer;
