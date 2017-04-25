import React from 'react';
import { connect } from 'react-redux';

import { fetchBusinessesByCategory, fetchBusiness } from '../../actions/business_actions';
import { fetchSearchResults } from '../../actions/search_actions';
import { logout } from '../../actions/session_actions';
import Header from '../header';

class BusinessShow extends React.Component {
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
  return {
    image_url: state.business.image_url,
    title: state.business.title,
    price: state.business.price,
    phone: state.business.phone,
    address1: state.business.address1,
    address2: state.business.address2,
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

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);
