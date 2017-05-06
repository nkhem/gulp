import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Main from './main';
import SessionForm from './session/session_form';
import SearchResults from './search_results';
import BusinessShow from './biz/business_show';
import UserProfile from './user/user_profile';

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

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Main } />
          <Route path="login" component={ SessionForm } onEnter={ _redirectIfLoggedIn } />
          <Route path="signup" component={ SessionForm } onEnter={ _redirectIfLoggedIn } />
          <Route path="search" component={ SearchResults } />
          <Route path ="business/:businessId" component={BusinessShow} />
          <Route path ="user/:userId" component={UserProfile} onEnter={ _redirectIfUnauthorizedUser } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
