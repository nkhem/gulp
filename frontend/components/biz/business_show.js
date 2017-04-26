import React from 'react';
import { connect } from 'react-redux';

import { fetchBusinessesByCategory, fetchBusiness } from '../../actions/business_actions';
import { fetchSearchResults } from '../../actions/search_actions';
import { logout } from '../../actions/session_actions';
import Header from '../header';

class BusinessShow extends React.Component {
  componentWillMount(){
    this.props.fetchBusiness(this.props.params.businessId);
  }

  render() {
    return (
      <div id='biz-show' key={this.props.id}>
        <Header
          loggedIn={this.props.loggedIn}
          logout={ this.props.logout }
          fetchSearchResults={ this.props.fetchSearchResults }
          searchResults={ this.props.searchResults }
          fetchBusinessesByCategory={this.props.fetchBusinessesByCategory}
          fetchBusiness={this.props.fetchBusiness}
          shouldDisplaySearchBar={true}
          />
        <img src={`${this.props.image_url}`} width={300} />
        <h4>{this.props.title}</h4>
        <p>{this.props.price}</p>
        <p>{this.props.phone}</p>
        <p>{this.props.address1}</p>
        <p>{this.props.address2}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const biz = state.businesses.featured;

  return {
    image_url: biz.image_url,
    title: biz.title,
    price: biz.price,
    phone: biz.phone,
    address1: biz.address1,
    address2: biz.address2,
    searchResults: state.searchResults
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    logout: () => dispatch(logout()),
    fetchBusinessesByCategory: cat => dispatch(fetchBusinessesByCategory(cat)),
    fetchSearchResults: term => dispatch(fetchSearchResults(term)),
    fetchBusiness: titleOrId => dispatch(fetchBusiness(titleOrId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);
