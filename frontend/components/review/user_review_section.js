import React from 'react';
import ReviewIndex from './review_index';
import { withRouter } from 'react-router';

class UserReviewSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      review: null
    };

    this.sendReviewForEdit = this.sendReviewForEdit.bind(this);
  }

  sendReviewForEdit(review){
    this.props.router.replace(`/business/${review.business_id}?edit='${review.id}'`);
  }

  render() {
    return (
      <div className={`review-section ${this.props.className}`}>
        <ReviewIndex
          isUserProfile={ true }
          reviews={this.props.reviews}
          fetchUser={this.props.fetchUser}
          currentUser={this.props.currentUser}
          deleteReview={this.props.deleteReview}
          sendReviewForEdit={this.sendReviewForEdit}/>
      </div>
    );
  }

}

export default withRouter(UserReviewSection);
