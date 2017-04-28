import React from 'react';
import ReviewIndex from './review_index';
import ReviewForm from './review_form';

class ReviewSection extends React.Component {

  render() {
    return (
      <div>
        <ReviewForm
          businessId={this.props.businessId}
          currentUser={this.props.currentUser}
          createReview={this.props.createReview}/>
        <ReviewIndex
          reviews={this.props.reviews}
          fetchUser={this.props.fetchUser}/>
      </div>
    );
  }

}

export default ReviewSection;
