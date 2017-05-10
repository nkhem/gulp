import React from 'react';
import ReviewIndex from './review_index';

const UserReviewSection = props => (
  <div className='user-review-section'>
    <ReviewIndex
      isUserProfile={ true }
      reviews={props.reviews}
      fetchUser={props.fetchUser}
      currentUser={props.currentUser}
      deleteReview={props.deleteReview}/>
  </div>
);

export default UserReviewSection;
