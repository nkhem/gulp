import React from 'react';
import { connect } from 'react-redux';

import { createReview } from '../../actions/review_actions';
import { fetchBusinessesByCategory, fetchBusiness } from '../../actions/business_actions';
import { fetchReviews } from '../../actions/review_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchSearchResults } from '../../actions/search_actions';
import { logout } from '../../actions/session_actions';

import Header from '../header';
import Footer from '../footer';
import SingleBizMap from '../map/single_biz_map';
import ReviewSection from '../review/review_section';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.biz = {};
    this.reviews = [];
  }

  componentWillMount(){
    this.props.fetchBusiness(this.props.params.businessId)
    .then(res => {
      console.log(res);
      this.biz = res.business;
      this.setState({biz: res.business});
      return this.props.fetchReviews(res.business.id);
    })
    .then(res => {
      console.log(res);
      this.reviews = res.reviews;
      this.setState({reviews: res.reviews});
  });
    console.log(this.biz);
    console.log(this.reviews);
  }

  render() {
    let biz = this.props.business;
    if (biz.id && biz.reviews) {
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
            shouldDisplayLogo={true}
            />

          <SingleBizMap business={biz} />

          <div className="biz-show-info">
            <h3>{biz.title}</h3>
            <div>
              <p>{biz.price}</p>
              <p>{biz.phone}</p>
              <p>{biz.address1}</p>
              <p>{biz.address2}</p>
              <p>{biz.rating}</p>
              <p>{biz.review_count}</p>
              <p>{biz.address2}</p>

              <div>

              </div>
            </div>
          </div>

          <ReviewSection
            reviews={this.props.business.reviews}
            businessId={this.props.business.id}
            currentUser={this.props.currentUser}
            fetchUser={this.props.fetchUser}
            createReview={this.props.createReview}/>

          <Footer id="biz-show-footer"/>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
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
    fetchBusiness: titleOrId => dispatch(fetchBusiness(titleOrId)),
    fetchReviews: bizId => dispatch(fetchReviews(bizId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    createReview: userId => dispatch(createReview(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);
