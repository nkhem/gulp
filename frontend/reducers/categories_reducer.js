import { RECEIVE_CATEGORIES } from '../actions/category_actions';

const initialState = { categories: [] };

const CategoriesReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_CATEGORIES:
      nextState = Object.assign(
        {},
        state,
        action.categories
      );
      return nextState;
    default:
      return state;
  }
};

export default CategoriesReducer;
