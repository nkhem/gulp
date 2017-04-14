import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
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

// signout
// $.ajax({
//     method: 'DELETE',
//     url: '/api/session'
//   })
