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
    this.props.fetchSearchResults(e.target.value);
  }

  handleSubmit(e){
    e.preventDefault();
    let { searchResults: {categoryTitles, businessTitles} } = this.props;

    let searchAlias = this.state.searchTerm.toLowerCase().replace(/[^0-9a-z]/g,'');
    let categoryAliases = categoryTitles.map( title => title.toLowerCase().replace(/[^0-9a-z]/g,''));
    let businessAliases = businessTitles.map( title => title.toLowerCase().replace(/[^0-9a-z]/g,''));

    let shouldRenderByCat = categoryAliases.includes(searchAlias);
    let shouldRenderBiz = businessAliases.includes(searchAlias);

    if (shouldRenderByCat) {
      this.props.fetchBusinessesByCategory(searchAlias)
        .then( () => this.props.router.replace("/search") );
    } else if (shouldRenderBiz) {
      this.props.fetchBusiness(searchAlias)
        .then( () => this.props.router.replace(`/business`) ); // /${this.props.business.id}
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
