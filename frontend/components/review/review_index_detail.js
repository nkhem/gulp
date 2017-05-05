import React from 'react';
import { starsImgUrl } from '../yelp/stars';
import _ from 'lodash';

class ReviewIndexDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
    this.renderEditBtns = this.renderEditBtns.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.review.user_id)
      .then(res => this.setState({ user: res.user}));
  }

  renderEditBtns(){
    if (this.props.currentUser && _.isEqual(this.state.user.id, this.props.currentUser.id)) {
      return (
        <div
          id='review-delete-btn'
          onClick={() => this.props.deleteReview(this.props.review)}>
          delete btn
        </div>
      );
    }
  }

  render() {
    if (Object.keys(this.state.user).length !== 0){

      let userDisplayName = this.state.user.f_name === 'Guest'
      ? 'Guest User'
      : `${this.state.user.f_name} ${this.state.user.l_name.slice(0,1)}`;
      return (
        <li className="review-index-detail">
          <p>{`${userDisplayName}:`}</p>
          <img src={starsImgUrl[this.props.review.rating]} />
          <p>{this.props.review.content}</p>
          {this.renderEditBtns()}
        </li>
      );
    } else {
      return null;
    }
  }

}

export default ReviewIndexDetail;
