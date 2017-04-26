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
    this.setState({ searchTerm: '' });
  }

  handleSubmit(e){
    if (e) {
      e.preventDefault();
    }

    let { searchResults: {categoryTitles, businessTitles} } = this.props;

    let searchAlias = this.state.searchTerm.toLowerCase().replace(/[^0-9a-z]/g,'');
    let categoryAliases = categoryTitles
      .map( title => title.toLowerCase().replace(/[^0-9a-z]/g,'')).sort((a,b) => a.length - b.length);

    let businessAliases = businessTitles
      .map( title => title.toLowerCase().replace(/[^0-9a-z]/g,'')).sort((a,b) => a.length - b.length);

    let cat = categoryAliases.find( alias => alias.match(searchAlias));
    let biz = businessAliases.find( alias => alias.match(searchAlias));

    if (cat) {
      this.props.fetchBusinessesByCategory(cat)
        .then( () => this.props.router.replace(`/search?category='${cat}'`));
    } else if (biz) {
      this.props.fetchBusiness(biz)
        .then( res => this.props.router.replace(`/business/${res.business.id}`));
    } else {
      console.log('no matches found');
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

      <DropdownList
        searchResults={this.props.searchResults}
        fetchSearchResults={ this.props.fetchSearchResults }
        fetchBusinessesByCategory={this.props.fetchBusinessesByCategory}
        fetchBusiness={this.props.fetchBusiness} />

      </div>
    );
  }
}

export default withRouter(SearchBar);
