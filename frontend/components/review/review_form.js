import React from 'react';
import { Link } from 'react-router';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businessId: props.businessId,
      userId: (props.currentUser ? props.currentUser.id : ''),
      content: '',
      rating: ''
    };

    this.renderSubmitBtn = this.renderSubmitBtn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

          <br/>

          <input
            type='text'
            value={this.state.rating}
            onChange={this.update("rating")}
            placeholder='rating'
            disabled={isLoggedIn ? false : 'disabled'} />

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
