import React from 'react';
import { Link } from 'react-router';
import { createReview } from '../../actions/review_actions';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.nullState = {
      review: {
        businessId: null,
        userId: null,
        content: '',
        rating: null
      }
    };

    this.state = this.nullState;

    this.renderSubmitBtn = this.renderSubmitBtn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    let userId = this.props.currentUser ? this.props.currentUser.id : null;
    this.setState({
      businessId: this.props.businessId,
      userId: userId
    });
  }

  renderSubmitBtn(isLoggedIn){
    if (isLoggedIn) {
      return <input type="submit" value='Submit Review' />;
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
    this.setState({
      content: 'asdf',
      rating: 0
    });

    this.props.processForm(this.state.review)
      .then( () => {
        this.setState(this.nullState);
     });
  }

  render() {
    let isLoggedIn = this.props.currentUser;
    return (
      <div>
        <form id="new-review-form">

          <input
            type='text'
            placeholder={`current userId: ${this.state.userId}`}
            disabled={isLoggedIn ? false : 'disabled'} />

          <br/>

          <input
            type='text'
            placeholder={`current bizId: ${this.state.businessId}`}
            disabled={isLoggedIn ? false : 'disabled'} />

          <br/>

          <input
            type='text'
            placeholder='rating'
            disabled={isLoggedIn ? false : 'disabled'} />

          <br/>

          <input type='text'
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
