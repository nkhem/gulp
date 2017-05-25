import React from 'react';
import { withRouter } from 'react-router';
import _ from 'lodash';

import * as ReviewApiUtil from '../../util/review_api_util';
import ReviewIndex from './review_index';
import ReviewForm from './review_form';
import RelatedBizIndex from '../biz/related_biz_index';

class BizReviewSection extends React.Component {
  constructor(props) {
    super(props);

    this.nullState = {
      review: {
        id: null,
        content: '',
        rating: 0,
        userId: (props.currentUser ? props.currentUser.id : ''),
        businessId: props.businessId
      }
    };

    this.state = this.nullState;
  }

  componentWillMount(){

    let currentReviewId;
    if (window.location.hash.match('edit')) {

      currentReviewId = window.location.hash.slice(window.location.hash.indexOf('edit=') + 5);
      currentReviewId = parseInt(currentReviewId.slice(1, currentReviewId.length - 1));

      ReviewApiUtil.fetchReview(currentReviewId)
        .then(res => {
          this.setState({review: {
            id: currentReviewId,
            content: res.content,
            rating: res.rating,
            userId: this.state.userId,
            businessId: this.state.businessId
          }});
        });
    }
  }

  componentWillUpdate(nextProps){
    if (nextProps.location.query.edit !== this.props.location.query.edit) {
      if (nextProps.location.query.edit) {
        let currentReviewId = window.location.hash.slice(window.location.hash.indexOf('edit=') + 5)
        currentReviewId = parseInt(currentReviewId.slice(1, currentReviewId.length - 1));

        ReviewApiUtil.fetchReview(currentReviewId)
          .then(res => {
            this.setState({review: {
              id: currentReviewId,
              content: res.content,
              rating: res.rating,
              userId: res.user_id,
              businessId: res.business_id
            }});
          });
      } else {
        this.setState(this.nullState);
      }
    }
  }



  render() {

    return (
      <div className='review-section'>
        <ReviewIndex
          currentReviewId={this.state.review.id}
          isUserProfile={ false }
          reviews={this.props.reviews}
          fetchUser={this.props.fetchUser}
          refreshUser={this.props.refreshUser}
          currentUser={this.props.currentUser}
          deleteReview={this.props.deleteReview}
          />
        <div className='review-section-col-2'>
          <ReviewForm
            currentUser={this.props.currentUser}
            createReview={this.props.createReview}
            errors={this.props.errors}
            clearReviewErrors={this.props.clearReviewErrors}
            currentReview={this.state.review}
            businessId={this.props.businessId}
            editReview={this.props.editReview}
            refreshUser={this.props.refreshUser}
            />
          <RelatedBizIndex
            currentBizId={this.props.businessId}
            currentBizCategory={this.props.currentBizCategory}
            fetchBusinessesByCategory={this.props.fetchBusinessesByCategory}
            />
        </div>
      </div>
    );
  }

}

export default withRouter(BizReviewSection);
