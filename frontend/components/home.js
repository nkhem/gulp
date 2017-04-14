import React from 'react';
import SearchBar from './search_bar.js';
import Header from './header';

class Home extends React.Component {

  render() {
    return (
      <div id='home' className='main-content'>
        <Header />
        <h1>gulp</h1>
        <SearchBar />
      </div>
    );
  }

}

export default Home;
