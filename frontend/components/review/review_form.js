import React from 'react';

class ReviewForm extends React.Component {

  render() {
    return (
      <div>
        <form id="new-review-form">

          <input
            type='text'
            placeholder='rating' />

          <br/>

          <input type='text'
            placeholder='content' />

          <br/>

          <input type="submit" value="Submit Review" />
        </form>
      </div>
    );
  }

}

export default ReviewForm;
