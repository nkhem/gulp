import React from 'react';
import ReviewIndexDetail from './review_index_detail';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderIndexDetail = this.renderIndexDetail.bind(this);
    this.renderBizDetail = this.renderBizDetail.bind(this);
  }

  renderBizDetail(){
    if (this.props.isUserProfile) {
      return <p>BIZ DETAIL</p>;
    }
  }

  renderIndexDetail(){
    return this.props.reviews.map( review => {
      return (
        <div>
          {this.renderBizDetail()}

          <ReviewIndexDetail
            review={review}
            key={review.id}
            fetchUser={this.props.fetchUser}
            currentUser={this.props.currentUser}
            deleteReview={this.props.deleteReview}
            sendReviewForEdit={this.props.sendReviewForEdit} />
        </div>
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
