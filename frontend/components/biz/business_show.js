import React from 'react';
import { connect } from 'react-redux';

import { fetchBusinessesByCategory, fetchBusiness, fetchReviews } from '../../actions/business_actions';
import { fetchSearchResults } from '../../actions/search_actions';
import { logout } from '../../actions/session_actions';
import Header from '../header';
import ReviewSection from '../review/review_section';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.renderReviewSection = this.renderReviewSection.bind(this);
  }

  renderReviewSection(){
    if (this.props.business) {
      return <ReviewSection
        reviews={this.props.business.reviews}
        businessId={this.props.business}
        currentUser={this.props.currentUser}/>;
    }
  }

  componentWillMount(){
    // console.log('componentWillMount');
    this.props.fetchBusiness(this.props.params.businessId)
    .then(res => console.log('success:', res));
  }

  render() {
    let biz = this.props.business;
    return (
      <div id='biz-show' key={biz.id}>
        <Header
          loggedIn={this.props.loggedIn}
          logout={ this.props.logout }
          fetchSearchResults={ this.props.fetchSearchResults }
          searchResults={ this.props.searchResults }
          fetchBusinessesByCategory={this.props.fetchBusinessesByCategory}
          fetchBusiness={this.props.fetchBusiness}
          shouldDisplaySearchBar={true}
          />
        <img src={`${biz.image_url}`} width={300} />
        <h4>{biz.title}</h4>
        <p>{biz.price}</p>
        <p>{biz.phone}</p>
        <p>{biz.address1}</p>
        <p>{biz.address2}</p>

        {this.renderReviewSection()}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    business: state.businesses.featured,
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
