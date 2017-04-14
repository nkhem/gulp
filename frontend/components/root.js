import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Home from './home';
import SessionForm from './session_form';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={Home}/>
        <Route path="login" component={ SessionForm } />
        <Route path="signup" component={ SessionForm } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
