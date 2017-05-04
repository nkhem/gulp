import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const signup = user => dispatch => {
  return ApiUtil.signup(user)
    .then(userPromise => {
      dispatch(receiveCurrentUser(userPromise));
    }, errors => {
      dispatch(receiveErrors(errors.responseJSON));
    });
};

export const login = user => dispatch => {
  return ApiUtil.logIn(user)
    .then(userPromise => {
      dispatch(receiveCurrentUser(userPromise));
    }, errors => {
      dispatch(receiveErrors(errors.responseJSON));
    });
};

export const logout = () => dispatch => {
  return ApiUtil.logOut()
    .then(() => {
      dispatch(receiveCurrentUser(null));
    });
};

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser,
    errors: []
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    currentUser: null,
    errors: errors
  };
};

export const clearErrors = currentUser => {
  return {
    type: CLEAR_ERRORS,
    currentUser: currentUser
  };
};
