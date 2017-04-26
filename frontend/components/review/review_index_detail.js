import React from 'react';

class ReviewIndexDetail extends React.Component {

  render() {
    console.log(this.props.review);
    return (
      <div>
        <p>ReviewIndexDetail</p>
      <li>{this.props.review}</li>
      </div>
    );
  }

}

export default ReviewIndexDetail;
