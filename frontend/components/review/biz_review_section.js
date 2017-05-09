import React from 'react';
import { withRouter } from 'react-router';

import * as ReviewApiUtil from '../../util/review_api_util';
import ReviewIndex from './review_index';
import ReviewForm from './review_form';

class BizReviewSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      review: {
        id: null,
        content: '',
        rating: 0,
        userId: (props.currentUser ? props.currentUser.id : ''),
        businessId: props.businessId
      }
    };

    this.sendReviewForEdit = this.sendReviewForEdit.bind(this);
  }

  componentWillMount(){

    let currentReviewId;
    if (this.props.location.query.edit) {
      currentReviewId = this.props.location.query.edit;
      currentReviewId = currentReviewId.slice(1, currentReviewId.length - 1);
      ReviewApiUtil.fetchReview(currentReviewId)
        .then(res => {
          this.setState({review: {
            id: currentReviewId,
            content: res.content,
            rating: res.rating
          }});
        });
    }
  }

  sendReviewForEdit(review){
    this.setState({review: review});
    this.props.router.replace(`/business/${review.business_id}?edit='${review.id}'`);
  }

  render() {

    return (
      <div className={`review-section`}>
        <ReviewForm
          businessId={this.props.businessId}
          currentUser={this.props.currentUser}
          createReview={this.props.createReview}
          errors={this.props.errors}
          clearReviewErrors={this.props.clearReviewErrors}
          currentReview={this.state.review}
          editReview={this.props.editReview}
          refreshUser={this.props.refreshUser}
          />
        <ReviewIndex
          currentReviewId={this.state.review.id}
          isUserProfile={ false }
          reviews={this.props.reviews}
          fetchUser={this.props.fetchUser}
          refreshUser={this.props.refreshUser}
          currentUser={this.props.currentUser}
          deleteReview={this.props.deleteReview}
          sendReviewForEdit={this.sendReviewForEdit}
          />
      </div>
    );
  }

}

export default withRouter(BizReviewSection);
