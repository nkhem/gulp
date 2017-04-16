import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

let store;
if (window.currentUser) {
  const preloadedState = { session: { currentUser: window.currentUser } };
  store = configureStore(preloadedState);
} else {
  store = configureStore();
}

window.store = store;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  store = store;
  ReactDOM.render(<Root store={ store }/>, root);
});

// let user = {user: {f_name: 'Nicole', l_name: 'Hemenway', email: 'nkhemenway@gmail.com', password: 'hemenway'}}

// let user = {user: {f_name: "asdf", l_name: "asdf", email: "asdfasdf", password: "asdfasdf"}}
// signup
// $.ajax({
//     method: 'POST',
//     url: '/api/user',
//     data: user
//   })

// logout
// $.ajax({
//     method: 'DELETE',
//     url: '/api/session'
//   })
