import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import { fetchSearchResults } from '../actions/search_actions';
import { fetchBusinessesByCategory, fetchBusiness } from '../actions/business_actions';

import Header from './header';
import SearchBar from './search_bar';
import Footer from './footer';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header
          className='main-header'
          loggedIn={this.props.loggedIn}
          currentUser={this.props.currentUser}
          logout={ this.props.logout }
          fetchSearchResults={ this.props.fetchSearchResults }
          searchResults={ this.props.searchResults }
          fetchBusinessesByCategory={this.props.fetchBusinessesByCategory}
          fetchBusiness={this.props.fetchBusiness}
          shouldDisplaySearchBar={ false }
          shouldDisplayLogo={ false }
          />
        <div className="main-content">
          <div id="main-detail">
            <h1 id="main-gulp-logo" className="gulp-logo">gulp</h1>
            <SearchBar
              searchResults={ this.props.searchResults }
              fetchSearchResults={ this.props.fetchSearchResults }
              fetchBusinessesByCategory={this.props.fetchBusinessesByCategory}
              fetchBusiness={this.props.fetchBusiness}
              id="main-search-bar"
              />
          </div>
        </div>
        <Footer id="main-footer"/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    searchResults: state.searchResults
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    logout: () => dispatch(logout()),
    fetchSearchResults: term => dispatch(fetchSearchResults(term)),
    fetchBusinessesByCategory: cat => dispatch(fetchBusinessesByCategory(cat)),
    fetchBusiness: title => dispatch(fetchBusiness(title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
