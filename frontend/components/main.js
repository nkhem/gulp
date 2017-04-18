import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import { fetchSearchResults } from '../actions/search_actions';
import { fetchBusinessesByCategory, fetchBusiness } from '../actions/business_actions';
import Header from './header';

class Main extends React.Component {
  render() {
    console.log("Main this.props:");
    console.log(this.props);
    return (
      <div id='main' className='main-content'>
        <Header
          loggedIn={this.props.loggedIn}
          logout={ this.props.logout }
          fetchSearchResults={ this.props.fetchSearchResults }
          searchResults={ this.props.searchResults }
          fetchBusinessesByCategory={this.props.fetchBusinessesByCategory}
          fetchBusiness={this.props.fetchBusiness}
          />
        <h1>gulp</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
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
