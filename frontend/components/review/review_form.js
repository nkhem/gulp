import React from 'react';
import { Link } from 'react-router';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businessId: null,
      userId: null,
      content: '',
      rating: null
    };

    this.renderSubmitBtn = this.renderSubmitBtn.bind(this);
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

          {this.renderSubmitBtn(isLoggedIn)}

          <br/>
        </form>
      </div>
    );

  }

}

export default ReviewForm;
