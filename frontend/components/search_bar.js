import React, { Component } from 'react';
import DropdownList from './dropdown_list';
import DropdownItem from './dropdown_item';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { searchResults: [] };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(searchTerm){
    this.props.fetchSearchResults(searchTerm);
    this.setState({ searchResults: this.props.searchResults });
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
      <DropdownList
          searchResults={this.props.searchResults}
          />
      </div>
    );
  }
}

export default SearchBar;
