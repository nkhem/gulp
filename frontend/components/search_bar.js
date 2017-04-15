import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };
  }

  render(){
    return (
      <div className='search-bar'>
        <input
          placeholder="bubble tea, wineries, Philz"
          value={this.state.term}
          onChange={ event => {
            this.onInputChange(event.target.value);
          }}
        />
      </div>
    );
  }

  onInputChange(searchTerm){
    this.setState({term: searchTerm});
    this.props.onSearchTermChange(searchTerm);
  }
}

export default SearchBar;
