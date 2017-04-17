import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const nullMatches = {
  searchResults: {
    categories: [],
    businesses: [],
    allTitles: [],
    prevTitles: []
  }
};

import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BusinessesReducer from './businesses_reducer';
import CategoriesReducer from './categories_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  businesses: BusinessesReducer,
  categories: CategoriesReducer
});

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
