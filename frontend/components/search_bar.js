import React, { Component } from 'react';
import DropdownList from './dropdown_list';
import DropdownItem from './dropdown_item';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange(e){
    e.preventDefault();
    this.setState({ searchTerm: (e.target.value) });
    this.props.fetchSearchResults(e.target.value);
  }

  handleSubmit(e){
    e.preventDefault();
    let searchTerm = document.getElementById('search-field').value;

    this.setState({ searchTerm: searchTerm });
    console.log(this.state.searchTerm);
    this.props.fetchSearchResults(this.state.searchTerm)
      .then( searchResults => {
        console.log("handleSubmit searchResults:");
        console.log(searchResults);
        this.props.router.push('search');
      });
  }

  render(){
    return (
      <div className='search-bar'>

        <form
          className='search-form'
          onSubmit={ this.handleSubmit }>
          <input
            id="search-field"
            type="text"
            placeholder="tea, wineries, Philz"
            autoComplete="off"
            value={this.state.term}
            onChange={ this.onInputChange }
          />
          <input type="submit" value="search" />
        </form>

      <DropdownList searchResults={this.props.searchResults} />

      </div>
    );
  }
}

export default SearchBar;
