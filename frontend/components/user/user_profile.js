import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';
import { fetchBusinessesByCategory, fetchBusiness } from '../../actions/business_actions';
import { fetchReviews,
  clearReviewErrors,
  deleteReview,
  createReview } from '../../actions/review_actions';
import { fetchSearchResults } from '../../actions/search_actions';
import { logout } from '../../actions/session_actions';

import Header from '../header';
import Footer from '../footer';
import YelpSection from '../yelp/yelp_section';
import ReviewSection from '../review/review_section';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }
  componentWillMount(){

  }

  render() {
    return (
      <div>
        <Header
          loggedIn={this.props.loggedIn}
          currentUser={this.props.currentUser}
          currentUser={this.props.currentUser}
          logout={ this.props.logout }
          fetchSearchResults={ this.props.fetchSearchResults }
          searchResults={ this.props.searchResults }
          fetchBusinessesByCategory={this.props.fetchBusinessesByCategory}
          fetchBusiness={this.props.fetchBusiness}
          shouldDisplaySearchBar={true}
          shouldDisplayLogo={true}
          />

        <h3 id='under-construction'>Profile page coming soon!</h3>

          <Footer id="user-profile-footer"/>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    business: state.businesses.featured,
    searchResults: state.searchResults,
    errors: state.businesses.errors
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    logout: () => dispatch(logout()),
    fetchBusinessesByCategory: cat => dispatch(fetchBusinessesByCategory(cat)),
    fetchSearchResults: term => dispatch(fetchSearchResults(term)),
    fetchBusiness: titleOrId => dispatch(fetchBusiness(titleOrId)),
    fetchReviews: bizId => dispatch(fetchReviews(bizId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    createReview: userId => dispatch(createReview(userId)),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
    deleteReview: review => dispatch(deleteReview(review))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

// <ReviewSection
//   className='user-profile-reviews'
//   reviews={this.props.business.reviews}
//   businessId={this.props.business.id}
//   currentUser={this.props.currentUser}
//   fetchUser={this.props.fetchUser}
//   createReview={this.props.createReview}
//   errors={this.props.errors}
//   clearReviewErrors={this.props.clearReviewErrors}
//   currentUser={this.props.currentUser}
//   deleteReview={this.props.deleteReview}/>
