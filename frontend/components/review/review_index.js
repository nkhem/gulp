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
        key={review.id}
        fetchUser={this.props.fetchUser} />;
    });
  }

  render() {
    return (
      <div className="review-idx">
      <h4>Reviews!</h4>
        <ul>
          {this.renderIndexDetail()}
        </ul>
      </div>
    );
  }

}

export default ReviewIndex;
