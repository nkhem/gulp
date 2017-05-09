import React from 'react';
import { withRouter } from 'react-router';

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
    if (this.props.currentReview) {
      const rev = this.props.currentReview;
      this.setState({review: {
        content: rev.content,
        rating: rev.rating
      }});
    }
  }

  sendReviewForEdit(review){
    this.setState({review: review});
    this.props.router.replace(`/business/${review.business_id}?edit='${review.id}'`);
  }

  render() {
    return (
      <div className={`review-section ${this.props.className}`}>
        <ReviewForm
          businessId={this.props.businessId}
          currentUser={this.props.currentUser}
          createReview={this.props.createReview}
          errors={this.props.errors}
          clearReviewErrors={this.props.clearReviewErrors}
          currentReview={this.state.review}
          editReview={this.props.editReview}
          />
        <ReviewIndex
          reviews={this.props.reviews}
          fetchUser={this.props.fetchUser}
          currentUser={this.props.currentUser}
          deleteReview={this.props.deleteReview}
          sendReviewForEdit={this.sendReviewForEdit}
          />
      </div>
    );
  }

}

export default withRouter(BizReviewSection);
