import * as UserApiUtil from '../util/user_api_util';
import * as SessionActions from '../actions/session_actions';


export const fetchUser = userId => dispatch => {
  return UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)));
};

export const refreshUser = userId => dispatch => {
  console.log('refreshUser action');
  return UserApiUtil.refreshUser(userId)
    .then(user => dispatch(receiveUser(user)));
};
