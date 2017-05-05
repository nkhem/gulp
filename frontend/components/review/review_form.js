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
      return <input className="transparent-btn" type="submit" value='Submit Review' />;
    } else {
      return (
        <div>
          Wanna write a review? {<Link to="login">Log in</Link>} or {<Link to="signup">sign up</Link>}
        </div>
      );
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderRatingInput(isLoggedIn){
    if (isLoggedIn) {
      return (
        <ul
          className="rating-input"
          onMouseOut={this.handleRatingMouseOut}>
          <li id="star-1"
            onMouseOver={this.handleRatingMouseOver}
            onClick={this.handleRatingClick}>1</li>
          <li id="star-2"
            onMouseOver={this.handleRatingMouseOver}
            onMouseOut={this.handleRatingOMouseut}
            onClick={this.handleRatingClick}>2</li>
          <li id="star-3"
            onMouseOver={this.handleRatingMouseOver}
            onClick={this.handleRatingClick}>3</li>
          <li id="star-4"
            onMouseOver={this.handleRatingMouseOver}
            onClick={this.handleRatingClick}>4</li>
          <li id="star-5"
            onMouseOver={this.handleRatingMouseOver}
            onClick={this.handleRatingClick}>5</li>
        </ul>
      );
    } else {
      return (
        <div>
          Wanna write a review? {<Link to="login">Log in</Link>} or {<Link to="signup">sign up</Link>}
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

  render() {
    let isLoggedIn = this.props.currentUser;
    return (
      <div>
        <form className="review-form" onSubmit={ e => this.handleSubmit(e)}>

          <input
            type='hidden'
            value={this.state.userId}
            placeholder={`current userId: ${this.state.userId}`}
            />

          <input
            type='hidden'
            value={this.state.businessId}
            />

          <div>
            <img id='stars-img-form' src={this.starsImgUrl}></img>
            {this.renderRatingInput(isLoggedIn)}
          </div>

          <br/>

          <input
            type='text'
            value={this.state.content}
            onChange={this.update("content")}
            placeholder='content'
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
