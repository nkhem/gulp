import React from 'react';
import ReviewIndexDetail from './review_index_detail';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderIndexDetail = this.renderIndexDetail.bind(this);
  }

  renderIndexDetail(){
    return this.props.reviews.map( review => {
      return <ReviewIndexDetail
        currentReviewId={this.props.currentReviewId}
        isUserProfile={ this.props.isUserProfile }
        review={review}
        key={review.id}
        fetchUser={this.props.fetchUser}
        currentUser={this.props.currentUser}
        deleteReview={this.props.deleteReview}
        />;
    });
  }

  render() {
    let greeting;
    if (this.props.isUserProfile) {
      greeting = `Hi, ${this.props.currentUser.f_name}! Your reviews:`;
    } else {
      greeting = 'Reviews';
    }
    
    return (
      <div className={`${this.props.isUserProfile ? 'user-profile-' : ''}review-index`}>
        <h3 className='review-section-header'>{greeting}</h3>
        <ul>
          {this.renderIndexDetail()}
        </ul>
      </div>
    );
  }

}

export default ReviewIndex;
