import React from 'react';
import SearchBar from './search_bar.js';

class Home extends React.Component {

  render() {
    return (
      <div id='home'>
        <h1>gulp</h1>
        <SearchBar />
      </div>
    );
  }

}

export default Home;
