import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(term){
    this.setState({ term: term });
    this.props.fetchMatches(term);
  }

  

  render(){
    return (
      <div className='search-bar'>
        <input
          placeholder="bubble tea, wineries, Philz"
          value={this.state.term}
          onChange={ e => {
            this.onInputChange(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default SearchBar;
