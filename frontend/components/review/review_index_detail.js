import React from 'react';
import { starsImgUrl } from '../yelp/stars';
import _ from 'lodash';

import * as BizApiUtil from '../../util/business_api_util';

class ReviewIndexDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      biz: {}
    };
    this.renderEditBtns = this.renderEditBtns.bind(this);
  }

  componentWillMount() {
    if (this.props.isUserProfile) {
      console.log(this.props.review);
      BizApiUtil.fetchBusiness(this.props.review.business_id)
      .then(res => console.log(res));
    } else {
      this.props.fetchUser(this.props.review.user_id)
        .then(res => this.setState({ user: res.user}));
    }
  }

  renderEditBtns(){
    if (this.props.currentUser && _.isEqual(this.state.user.id, this.props.currentUser.id)) {
      return (
        <div className='review-index-detail-btns'>
          <div
            id='review-delete-btn'
            className='gray-btn'
            onClick={() => {
              this.props.sendReviewForEdit(this.props.review);
            }}>
            edit
          </div>
          <div
            id='review-delete-btn'
            className='gray-btn'
            onClick={() => this.props.deleteReview(this.props.review)}>
            delete
          </div>
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
        <div id={`review-index-detail-${this.props.review.id}`}>
          <li
            id={`review-index-detail-${this.props.review.id}`}
            className="review-index-detail">
            <p>{`${userDisplayName}:`}</p>
            <img src={starsImgUrl[this.props.review.rating]} />
            <p>{this.props.review.content}</p>
            {this.renderEditBtns()}
          </li>
        </div>
      );
    } else {
      return null;
    }
  }

}

export default ReviewIndexDetail;
