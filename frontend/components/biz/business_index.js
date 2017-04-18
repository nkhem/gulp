import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchSearchResults } from '../../actions/search_actions';
import { fetchBusiness } from '../../actions/business_actions';

import Header from '../header';
import BusinessIndexDetail from './business_index_detail';

class BusinessIndex extends React.Component {
  renderBizTitles(bizes){
    return (
      <ul id='business-results'>
        { bizes.map( biz => (
          <BusinessIndexDetail business={biz} key={biz.alias}/>
        ))}
      </ul>
    );

  }
  render() {
    return (
      <div id='main' className='biz-index'>
        <Header
          loggedIn={this.props.loggedIn}
          logout={ this.props.logout }
          fetchSearchResults={ this.props.fetchSearchResults }
          searchResults={ this.props.searchResults } />
        <h1>gulp</h1>
        <h3>{this.renderBizTitles(this.props.searchResults.businesses)}</h3>
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
