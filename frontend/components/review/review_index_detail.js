import React from 'react';

class ReviewIndexDetail extends React.Component {

  render() {
    console.log(this.props.review);
    return (

      <li>{this.props.review.content}</li>
    );
  }

}

export default ReviewIndexDetail;
