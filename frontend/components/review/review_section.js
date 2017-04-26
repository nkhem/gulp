import React from 'react';
import ReviewIndex from './review_index';
import ReviewForm from './review_form';

class ReviewSection extends React.Component {

  render() {
    return (
      <div>
        <ReviewForm />
        <ReviewIndex />
      </div>
    );
  }

}

export default ReviewSection;
