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
    console.log(this.props.searchResults);

    this.props.searchResults.allTitles.forEach( title => {
      let node = document.createElement("li")
      let textnode = document.createTextNode(title);
      document.getElementById("search-results").appendChild(textnode);
    });
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
      <DropdownList />
      </div>
    );
  }
}

export default SearchBar;
