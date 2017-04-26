import React from 'react';
import ReviewIndexDetail from './review_index_detail';

class ReviewIndex extends React.Component {

  render() {
    return (
      <div>
      <h4>Reviews!</h4>
        <ul>
          <li>aasdf</li>
          <li>asdfagdas</li>
          <li>dasdf</li>
          <ReviewIndexDetail />
        </ul>
      </div>
    );
  }

}

export default ReviewIndex;
