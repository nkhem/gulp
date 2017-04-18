import React, { Component } from 'react';
import { withRouter } from 'react-router';

import DropdownList from './dropdown/dropdown_list';
import DropdownItem from './dropdown/dropdown_item';

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
    this.props.fetchSearchResults(e.target.value)
      .then( asdf => console.log(this.props.searchResults));
  }

  handleSubmit(e){
    e.preventDefault();

    let shouldRenderByCat = this.props.searchResults.categoryTitles.includes(this.state.searchTerm)
    let shouldRenderBiz = this.props.searchResults.businessTitles.includes(this.state.searchTerm)

    if (shouldRenderByCat) {
      console.log("shouldRenderByCat");
      this.props.fetchBusinessesByCategory(this.props.searchResults.searchTerm.toLowerCase())
      .then( () => this.props.router.push("/search") );
    } else if (shouldRenderBiz) {
      console.log("shouldRenderBiz");
      this.props.fetchBusiness(this.props.searchResults.searchTerm.toLowerCase())
        .then( () => this.props.router.push("/business") );

    }
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

export default withRouter(SearchBar);
