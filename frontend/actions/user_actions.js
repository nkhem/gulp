import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUser = userId => dispatch => {
  return UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)));
};

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user: user
});
