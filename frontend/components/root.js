import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Main from './main';
import SessionForm from './session/session_form';
import BusinessIndex from './biz/business_index';
import BusinessShow from './biz/business_show';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
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
          <Route path="search" component={ BusinessIndex } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
