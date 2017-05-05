import React from 'react';
import { starsImgUrl } from '../yelp/stars';

class ReviewIndexDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentWillMount() {
    this.props.fetchUser(this.props.review.user_id)
      .then(res => this.setState({ user: res.user}));
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
        </li>
      );
    } else {
      return null;
    }
  }

}

export default ReviewIndexDetail;
