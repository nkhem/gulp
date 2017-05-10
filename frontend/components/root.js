import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import _ from 'lodash';

import App from './app';
import Main from './main';
import SessionForm from './session/session_form';
import SearchResults from './search_results';
import BusinessShow from './biz/business_show';
import UserProfile from './user/user_profile';
import * as ReviewApiUtil from '../util/review_api_util';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;

    if (currentUser) {
      replace('/');
    }
  };

  const _redirectIfUnauthorizedUser = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser || currentUser.id !== parseInt(window.location.hash.slice(7))){
      replace('/');
    }
  };

  const _divertFromEditIfUnauthorizedUser = (nextState, replace) => {
    if (window.location.hash.match('edit')){
      const currentUser = store.getState().session.currentUser;
      let currentReviewId = window.location.hash.slice(19);
      currentReviewId = parseInt(currentReviewId.slice(1, currentReviewId.length - 1));

      ReviewApiUtil.fetchReview(currentReviewId)
        .then( res => {
          let unauthorizedUser = !_.isEqual(res.user_id, currentUser.id);
          if (unauthorizedUser) {
            replace(window.location.hash.slice(1, 15));
          }
        }, err => {
          replace(window.location.hash.slice(1, 15));
        });
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Main } />
          <Route path="login" component={ SessionForm } onEnter={ _redirectIfLoggedIn } />
          <Route path="signup" component={ SessionForm } onEnter={ _redirectIfLoggedIn } />
          <Route path="search" component={ SearchResults } />
          <Route path ="business/:businessId" component={BusinessShow} onEnter={ _divertFromEditIfUnauthorizedUser }/>
          <Route path ="user/:userId" component={UserProfile} onEnter={ _redirectIfUnauthorizedUser } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
