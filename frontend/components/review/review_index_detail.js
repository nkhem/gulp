import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

import { starsImgUrl } from '../yelp/stars';
import * as UserApiUtil from '../../util/user_api_util';

class ReviewIndexDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      biz: {}
    };
    this.bizFetchCompleted = false;
    this.userFetchCompleted = false;

    this.renderEditBtns = this.renderEditBtns.bind(this);
    this.renderBizDetail = this.renderBizDetail.bind(this);
  }

  componentWillMount() {

    console.log('cwm');
    if (this.props.isUserProfile) {
      BizApiUtil.fetchBusiness(`${this.props.review.business_id}`)
        .then(res => {
          console.log('bizFetchCompleted: ', res );
          this.bizFetchCompleted = true;
          this.setState({biz: res});
        });
    } else {
      UserApiUtil.fetchUser(this.props.review.user_id)
        .then(res => {
          this.userFetchCompleted = true;
          this.setState({ user: res});
      });
    }
  }

  renderBizDetail(){
    let { biz } = this.state;
    return (
      <div className='user-profile-biz-detail'>
        <Link to={`business/${biz.id}`}>
          <h3>{biz.title}</h3>
          <p>{biz.price}</p>
          <p>{biz.phone}</p>
          <p>{biz.address1}</p>
          <p>{biz.address2}</p>
        </Link>
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
            onClick={() => {
              this.props.deleteReview(this.props.review);
            }}>
            delete
          </div>
        </div>
      );
    }
  }

  render() {
    console.log('rev index detail');
    console.log('this.props', this.props);
    console.log('this.state', this.state);
    if (this.props.isUserProfile && this.bizFetchCompleted) {
      return (
        <div id={`review-index-detail-${this.props.review.id}`}>
          <li
            className="review-index-detail">
            {this.renderBizDetail()}
            <img src={starsImgUrl[this.props.review.rating]} />
            <p>{this.props.review.content}</p>
            {this.renderEditBtns()}
          </li>
        </div>
      );
    } else if ((!this.props.isUserProfile) && this.userFetchCompleted) {
        let userDisplayName = this.state.user.f_name === 'Guest'
        ? 'Guest User'
        : `${this.state.user.f_name} ${this.state.user.l_name.slice(0,1)}`;

        return (
          <div id={`review-index-detail-${this.props.review.id}`}>
            <li
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
