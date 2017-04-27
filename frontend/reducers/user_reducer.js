import { RECEIVE_USER } from '../actions/user_actions';

const initialState = {};

const UsersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {

    case RECEIVE_USER:
      nextState = Object.assign(
        {},
        state,
        {user: action.user});
      return nextState;

    default:
      return state;

  }
};

export default UsersReducer;
