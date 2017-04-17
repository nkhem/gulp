import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BusinessesReducer from './businesses_reducer';
import CategoriesReducer from './categories_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  searchResults: SearchReducer,
  businesses: BusinessesReducer,
  categories: CategoriesReducer
});

export default RootReducer;

// {
//   session: {
//     currentUser: {
//       id: 1,
//       email: "guest@guest.com"
//     },
//     errors: []
//   },
//   searchResults: {
//     categories: [],
//     businesses: [],
//     allTitles: [],
//     prevTitles: []
//   }
//   businesses: {
//     currentBusiness: {},
//     businessesList:{
//       1: {
//         id: 1
//         <!-- ... -->
//       },
//       <!-- ... -->
//       n: {
//         id: n
//         <!-- ... -->
//       },
//     }
//   },
//   reviews: {}
// }
