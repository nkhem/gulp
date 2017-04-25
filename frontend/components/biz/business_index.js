import React from 'react';
import BusinessIndexDetail from './business_index_detail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchBusinessesByCategory, fetchBusiness } from '../../actions/business_actions';
import { fetchSearchResults } from '../../actions/search_actions';
import { logout } from '../../actions/session_actions';
import Header from '../header';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.renderBizTitles = this.renderBizTitles.bind(this);
  }

  componentWillMount(){
    // console.log('willmount');
    this.setState({
      businesses: this.props.businesses
    });
  }

  componentDidUpdate(){
    // console.log('willupdate');
    let currentBusinesses = this.state.businesses;
    let nextBusinesses = this.props.businesses;

    if (currentBusinesses !== nextBusinesses) {
      this.setState({
        businesses: nextBusinesses
      });
    }
  }

  renderBizTitles(){
    // console.log('rendering biz titles');
    let { businesses } = this.state;
    return businesses.map( biz => {
      // console.log(biz.alias);
      return <BusinessIndexDetail business={biz} key={biz.alias}/>;
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
    businesses: Object.values(state.businesses),
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
