import React from 'react';
import ReviewIndexDetail from './review_index_detail';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderIndexDetail = this.renderIndexDetail.bind(this);
  }

  renderIndexDetail(){
    return this.props.reviews.map( review => {
      return (
        <ReviewIndexDetail
          isUserProfile={this.props.isUserProfile}
          review={review}
          key={review.id}
          currentUser={this.props.currentUser}
          deleteReview={this.props.deleteReview}
          sendReviewForEdit={this.props.sendReviewForEdit} />
      );
    });
  }

  render() {
    return (
      <div className="review-index">
        <h3>Reviews</h3>
        <ul>
          {this.renderIndexDetail()}
        </ul>
      </div>
    );
  }

}

export default ReviewIndex;
