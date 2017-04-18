import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchSearchResults } from '../../actions/search_actions';
import { fetchBusiness } from '../../actions/business_actions';
import Header from '../header';

class BusinessIndex extends React.Component {

  render() {
    return (
      <div id='main' className='biz-index'>

        <h3>{this.props.searchResults.businesses}</h3>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    searchResults: state.searchResults
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    logout: () => dispatch(logout()),
    fetchBusiness: term => dispatch(fetchBusiness(term)),
    fetchSearchResults: term => dispatch(fetchSearchResults(term)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
