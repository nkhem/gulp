import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const nullMatches = {
  searchTerm: '',
  categories: [],
  businesses: [],
  categoryTitles: [],
  businessTitles: [],
  allTitles: []//DELETE SOON!!!!!
};

const SearchReducer = (state = nullMatches, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      nextState = Object.assign(
        {},
        state,
        action.searchResults
      );
      return nextState;
    default:
      return state;
  }
};

export default SearchReducer;
