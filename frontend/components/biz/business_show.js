import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router';

import { fetchBusinessesByCategory, fetchBusiness } from '../../actions/business_actions';
import {fetchReviews,
  clearReviewErrors,
  deleteReview,
  createReview,
  editReview } from '../../actions/review_actions';
import { fetchUser,
  refreshUser } from '../../actions/user_actions';
import { fetchSearchResults } from '../../actions/search_actions';
import { logout } from '../../actions/session_actions';

import Header from '../header';
import Footer from '../footer';
import SingleBizMap from '../map/single_biz_map';
import YelpSection from '../yelp/yelp_section';
import BizReviewSection from '../review/biz_review_section';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      biz: {},
      reviews: []
    };

    this.deleteReview = this.deleteReview.bind(this);
  }

  componentWillMount(){
    if (this.props.errors.length > 0) this.props.clearReviewErrors();

    this.props.fetchBusiness(this.props.params.businessId)
    .then(res => {
      this.biz = res.business;
      this.setState({biz: res.business});
      return this.props.fetchReviews(res.business.id);
    })
    .then(res => {
      this.reviews = res.reviews;
      this.setState({reviews: res.reviews});
  });
  }

  componentDidUpdate(nextProps, nextState) {
    if (!_.isEqual(parseInt(nextProps.params.businessId), this.state.biz.id)) {
      if (this.props.errors.length > 0) this.props.clearReviewErrors();

      this.props.fetchBusiness(this.props.params.businessId)
      .then(res => {
        this.biz = res.business;
        this.setState({biz: res.business});
        return this.props.fetchReviews(res.business.id);
      })
      .then(res => {
        this.reviews = res.reviews;
        this.setState({reviews: res.reviews});
    });
    }

    if (nextProps.location.query.edit !== this.props.location.query.edit) {
      this.props.fetchReviews(this.state.biz.id)
        .then(res => {
          this.reviews = res.reviews;
          this.setState({reviews: res.reviews});
        });
    }
  }

  deleteReview(review){
    return this.props.deleteReview(review)
      .then( () => this.props.refreshUser(this.props.currentUser.id));
  }

  render() {
    let biz = this.props.business;
    if (biz.id && biz.reviews) {
      return (
        <div id='biz-show' key={biz.id}>

          <Header
            loggedIn={this.props.loggedIn}
            currentUser={this.props.currentUser}
            logout={ this.props.logout }
            fetchSearchResults={ this.props.fetchSearchResults }
            searchResults={ this.props.searchResults }
            fetchBusinessesByCategory={this.props.fetchBusinessesByCategory}
            fetchBusiness={this.props.fetchBusiness}
            shouldDisplaySearchBar={true}
            shouldDisplayLogo={true}
            />

          <SingleBizMap business={biz} />

          <div className="biz-show-info-container">
            <img
              className="biz-show-img"
              src={biz.image_url} />
            <div className='biz-show-info'>
              <div>
                <h3>{biz.title}</h3>
                <p>{biz.price}</p>
                <p>{biz.phone}</p>
                <p>{biz.address1}</p>
                <p>{biz.address2}</p>
              </div>

              <YelpSection
                className='biz-show-yelp'
                rating={biz.rating}
                yelpUrl={biz.yelp_url}
                />
            </div>
          </div>

          <BizReviewSection
            className='biz-show-reviews'
            fetchBusinessesByCategory={this.props.fetchBusinessesByCategory}
            currentBizCategory={this.props.business.categories[0]}
            reviews={this.props.business.reviews}
            businessId={this.props.business.id}
            currentUser={this.props.currentUser}
            fetchUser={this.props.fetchUser}
            refreshUser={this.props.refreshUser}
            createReview={this.props.createReview}
            errors={this.props.errors}
            clearReviewErrors={this.props.clearReviewErrors}
            currentUser={this.props.currentUser}
            deleteReview={this.deleteReview}
            editReview={this.props.editReview}
            />

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
    refreshUser: userId => dispatch(refreshUser(userId)),
    createReview: userId => dispatch(createReview(userId)),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
    deleteReview: review => dispatch(deleteReview(review)),
    editReview: review => dispatch(editReview(review))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessShow));
