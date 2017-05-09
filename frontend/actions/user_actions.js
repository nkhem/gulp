import * as UserApiUtil from '../util/user_api_util';
import * as SessionActions from '../actions/session_actions';

export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUser = userId => dispatch => {
  return UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)));
};

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user: user
});

export const refreshUser = userId => dispatch => {
  return UserApiUtil.refreshUser(userId)
  .then(user => dispatch(SessionActions.receiveCurrentUser(user)));
};
