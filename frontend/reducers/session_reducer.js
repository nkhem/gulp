import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
 CLEAR_ERRORS } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = Object.assign(
        {},
        nullUser,
        { currentUser: action.currentUser }
      );
      console.log(nextState);
      return nextState;
    case RECEIVE_ERRORS:
      nextState = Object.assign(
        {},
        nullUser,
        { errors: action.errors }
      );
      console.log(nextState);
      return nextState;
    case CLEAR_ERRORS:
      nextState = Object.assign(
        {},
        nullUser
      );
      return nextState;
    default:
      return state;
  }
};

export default SessionReducer;
