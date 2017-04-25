import React from 'react';
import BusinessIndexDetail from './business_index_detail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { fetchBusinessesByCategory, fetchBusiness } from '../../actions/business_actions';
import { fetchSearchResults } from '../../actions/search_actions';
import { logout } from '../../actions/session_actions';
import Header from '../header';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessesList: []
    };
    this.renderBizTitles = this.renderBizTitles.bind(this);
  }

  componentWillMount(){
    this.setState({
      businessesList: this.props.businessesList
    });
  }

  componentWillUpdate(){
    let currentBusinesses = this.state.businessesList;
    let nextBusinesses = this.props.businessesList;

    if (currentBusinesses !== nextBusinesses) {
      this.setState({
        businessesList: nextBusinesses
      });
    }
  }

  renderBizTitles(){
    let { businessesList } = this.state;
    return businessesList.map( biz => {
      return <BusinessIndexDetail business={biz} key={biz.id}/>;
    });
  }

  render() {

    return (
      <div id='biz-index'>
      <Header
        loggedIn={this.props.loggedIn}
        logout={ this.props.logout }
        fetchSearchResults={ this.props.fetchSearchResults }
        searchResults={ this.props.searchResults }
        fetchBusinessesByCategory={this.props.fetchBusinessesByCategory}
        fetchBusiness={this.props.fetchBusiness}
        shouldDisplaySearchBar={true}
        />
      <div>{this.renderBizTitles()}</div>
      </div>
    );
  }

}

BusinessIndex.propTypes = {
  businesses: PropTypes.array
};

const mapStateToProps = state => {
  return {
    businessesList: Object.values(state.businesses.list),
    errors: state.session.errors,
    searchResults: state.searchResults
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    logout: () => dispatch(logout()),
    fetchBusinessesByCategory: cat => dispatch(fetchBusinessesByCategory(cat)),
    fetchSearchResults: term => dispatch(fetchSearchResults(term)),
    fetchBusiness: title => dispatch(fetchBusiness(title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
