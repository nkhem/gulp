import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { logout } from '../actions/session_actions';
import { fetchCategories } from '../actions/category_actions';
import { fetchBusinesses } from '../actions/business_actions';
import Header from './header';
import DropdownList from './dropdown_list';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.fetchMatches = this.fetchMatches.bind(this);
  }

  fetchMatches(term){
    const results = [];

    this.props.fetchCategories(term)
      .then( res => {
        res.categories.forEach( cat => results.push(cat.name));
      });

    this.props.fetchBusinesses(term)
      .then( res => {
        res.businesses.forEach( biz => results.push(biz.name));
      });

    return results;
  }

  render() {
    return (
      <div id='main' className='main-content'>
        <Header
          loggedIn={this.props.loggedIn}
          logout={ this.props.logout }
          fetchMatches={ this.fetchMatches } />
        <ul id="test"></ul>
        <h1>gulp</h1>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    logout: () => dispatch(logout()),
    fetchCategories: term => dispatch(fetchCategories(term)),
    fetchBusinesses: term => dispatch(fetchBusinesses(term))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
