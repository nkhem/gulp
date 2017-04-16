import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BusinessesReducer from './businesses_reducer';
import SearchResultsReducer from './search_results_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  searchResults: SearchResultsReducer,
  business: BusinessesReducer
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
//     currentTerm: 'k',
//     matches: {
//       categories: [],
//       businesses: [],
//       allTitles: [],
//       prevTitles: []
//     }
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
