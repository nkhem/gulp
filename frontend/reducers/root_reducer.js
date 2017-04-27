import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BusinessesReducer from './businesses_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  businesses: BusinessesReducer,
  searchResults: SearchReducer
});

export default RootReducer;
