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
        review={review}
        key={review.id} />;
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
      <h4>Reviews!</h4>
        <ul>
          <li>aasdf</li>
          <li>asdfagdas</li>
          <li>dasdf</li>
          {this.renderIndexDetail()}
        </ul>
      </div>
    );
  }

}

export default ReviewIndex;
