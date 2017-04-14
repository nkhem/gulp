import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});

// let user = {user: {f_name: 'Nicole', l_name: 'Hemenway', username: 'hemenway', email: 'nkhemenway@gmail.com', password: 'hemenway'}}

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
