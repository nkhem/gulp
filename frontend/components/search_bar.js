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
    console.log(e.target);
    this.setState({ searchResults: (e.target.value) });
    this.props.fetchSearchResults(e.target.value);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(document.getElementById("search-field"));
    // this.setState({ searchResults: (e.target.value) });
    // this.props.fetchSearchResults(e.target.value)
    //   .then( searchResults => {
    //     console.log("handleSubmit searchResults:");
    //     console.log(searchResults);
    //     this.props.router.push('/search');
    //   }).catch(res => console.log("afdasdfasdfa"));
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
            value={this.state.term}
            onChange={ this.onInputChange }
          />
        <input type="submit" value="search" />

        </form>
      <DropdownList
          searchResults={this.props.searchResults}
          />
      </div>
    );
  }
}

export default SearchBar;
