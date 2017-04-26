import React from 'react';
import ReviewIndex from './review_index';
import ReviewForm from './review_form';

class ReviewSection extends React.Component {

  render() {
    return (
      <div>
        <ReviewForm
          currentBiz={this.props.currentBiz}
          currentUser={this.props.currentUser}/>
        <ReviewIndex reviews={this.props.reviews}/>
      </div>
    );
  }

}

export default ReviewSection;
