import React from 'react';
import { Link } from 'react-router';

import { starsImgUrl } from '../yelp/stars';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.starsImgUrl = starsImgUrl[0];

    this.state = {
      businessId: props.businessId,
      userId: (props.currentUser ? props.currentUser.id : ''),
      content: '',
      rating: ''
    };

    this.renderSubmitBtn = this.renderSubmitBtn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRatingMouseOver = this.handleRatingMouseOver.bind(this);
    this.handleRatingMouseOut = this.handleRatingMouseOut.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
  }

  handleRatingMouseOver(e){
    const num = e.target.id.slice(-1);
    console.log('mouseover:', num);
    document.getElementById('stars-img-form').src = starsImgUrl[num];
  }

  handleRatingMouseOut(e){
    if (this.starsImgUrl === starsImgUrl[0]) {
      document.getElementById('stars-img-form').src = starsImgUrl[0];
    } else {
      document.getElementById('stars-img-form').src = this.starsImgUrl;
    }
  }

  handleRatingClick(e){
    const num = e.target.id.slice(-1);
    this.setState({ rating: num });
    this.starsImgUrl = starsImgUrl[num];
  }

  renderSubmitBtn(isLoggedIn){
    if (isLoggedIn) {
      return (
        <div className='review-form-end'>
          <input className="transparent-btn" type="submit" value='Submit Review' />
        </div>
      );
    } else {
      return (
        <div className='review-form-end'>
          Wanna write a review? {<Link to="login">Log in</Link>} or {<Link to="signup">sign up</Link>}
        </div>
      );
    }
  }

  renderRatingInput(isLoggedIn){
    if (isLoggedIn) {
      return (
        <div
          className="rating-input"
          onMouseOut={this.handleRatingMouseOut}>
          <span id="star-1"
            onMouseOver={this.handleRatingMouseOver}
            onClick={this.handleRatingClick}>1</span>
          <span id="star-2"
            onMouseOver={this.handleRatingMouseOver}
            onMouseOut={this.handleRatingOMouseut}
            onClick={this.handleRatingClick}>2</span>
          <span id="star-3"
            onMouseOver={this.handleRatingMouseOver}
            onClick={this.handleRatingClick}>3</span>
          <span id="star-4"
            onMouseOver={this.handleRatingMouseOver}
            onClick={this.handleRatingClick}>4</span>
          <span id="star-5"
            onMouseOver={this.handleRatingMouseOver}
            onClick={this.handleRatingClick}>5</span>
        </div>
      );
    }
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.createReview(this.state)
      .then( () => this.setState({
        businessId: this.state.businessId,
        userId: this.state.userId,
        content: '',
        rating: ''
      }));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    let isLoggedIn = this.props.currentUser;
    return (
      <div className="review-form">
        <form onSubmit={ e => this.handleSubmit(e)}>

          <input
            type='hidden'
            value={this.state.userId}
            placeholder={`current userId: ${this.state.userId}`}
            />

          <input
            type='hidden'
            value={this.state.businessId}
            />

          <div id='review-form-stars'>
            <img id='stars-img-form' src={this.starsImgUrl} />
            {this.renderRatingInput(isLoggedIn)}
          </div>

          <br/>

          <textarea
            className='review-form-content'
            type='text'
            value={this.state.content}
            onChange={this.update("content")}
            placeholder='My new favorite integer sodales tellus justo, laoreet consectetur enim ultricies id. Donec justo ligula, rhoncus sit amet elit at, condimentum mattis lacus. Suspendisse rutrum, mi et pellentesque auctor, arcu erat tempus neque, id tincidunt ligula felis vel ipsum.'
            disabled={isLoggedIn ? false : 'disabled'} />

          <br/>

          {this.renderSubmitBtn(isLoggedIn)}

          <br/>
        </form>
      </div>
    );

  }

}

export default ReviewForm;

// <input
//   type='text'
//   value={this.state.rating}
//   onChange={this.update("rating")}
//   placeholder='rating'
//   disabled={isLoggedIn ? false : 'disabled'} />
