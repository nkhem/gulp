import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BusinessesReducer from './businesses_reducer';
import CategoriesReducer from './categories_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  // categories: CategoriesReducer,
  businesses: BusinessesReducer,
  business: BusinessesReducer,
  searchResults: SearchReducer
});

export default RootReducer;
