import React, { Component } from 'react';
import DropdownList from './dropdown_list';
import DropdownItem from './dropdown_item';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e){
    this.setState({ searchResults: (e.target.value) });
    this.props.fetchSearchResults(e.target.value);
  }

  handleSubmit(e){
    this.setState({ searchResults: (e.target.value) });
    this.props.fetchSearchResults(e.target.value)
      .then( searchResults => {
        this.props.router.push('/search');
      });
  }

  render(){
    return (
      <div className='search-bar'>
        <form
          className='search-form'
          onSubmit={ e => {

        }}>
          <input
            placeholder="tea, wineries, Philz"
            value={this.state.term}
            onChange={ this.onInputChange }
          />
        </form>
      <DropdownList
          searchResults={this.props.searchResults}
          />
      </div>
    );
  }
}

export default SearchBar;
