import React from 'react';
import { starsImgUrl } from '../yelp/stars';
import _ from 'lodash';
import { Link } from 'react-router';

import * as BizApiUtil from '../../util/business_api_util';

class ReviewIndexDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      biz: {}
    };

    this.userFetchCompleted = false;
    this.bizFetchCompleted = false;

    this.renderEditBtns = this.renderEditBtns.bind(this);
    this.renderProfileEditBtns = this.renderProfileEditBtns.bind(this);
  }

  componentWillMount() {
    if (this.props.isUserProfile) {
      BizApiUtil.fetchBusiness(this.props.review.business_id)
      .then(res => {
        this.bizFetchCompleted = true;
        this.setState({biz: res});
      });
    } else {
      this.props.fetchUser(this.props.review.user_id)
        .then(res => {
          this.userFetchCompleted = true;
          this.setState({ user: res.user});
        });
    }
  }

  renderBizDetail(){
    let { biz } = this.state;
    return (
      <div>
        <img src={biz.image_url} />
        <div className={`${this.props.isUserProfile ? 'user-profile-' : ''}biz-show-info`}>
          <div>
            <h3>{biz.title}</h3>
            <p>{biz.price}</p>
            <p>{biz.phone}</p>
            <p>{biz.address1}</p>
            <p>{biz.address2}</p>
          </div>
        </div>
      </div>
    );
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

  renderProfileEditBtns(){
    return (
      <div className='review-index-detail-btns'>
        <Link to={`business/${this.state.biz.id}`}>
        <div
          id='review-edit-btn'
          className='gray-btn'
          >
          edit review
        </div>
        </Link>
      </div>
    );
  }

  render() {
    if (!this.props.isUserProfile && this.userFetchCompleted){

      let userDisplayName = this.state.user.f_name === 'Guest'
      ? 'Guest User'
      : `${this.state.user.f_name} ${this.state.user.l_name.slice(0,1)}`;

      return (
        <div className="review-index-detail">
          <li>
            <p>{`${userDisplayName}:`}</p>
            <img src={starsImgUrl[this.props.review.rating]} />
            <p>{this.props.review.content}</p>
            { this.renderEditBtns() }
          </li>
        </div>
      );
    } else if (this.props.isUserProfile && this.bizFetchCompleted) {
      return (
        <div className={`${this.props.isUserProfile ? 'user-profile-' : ''}review-index-detail`}>
          <li>
            {this.renderBizDetail()}
            <img id='stars' src={starsImgUrl[this.props.review.rating]} />
            <p>{this.props.review.content}</p>
            {this.renderProfileEditBtns()}
          </li>
        </div>
      );
    } else {
      return null;
    }
  }

}

export default ReviewIndexDetail;
