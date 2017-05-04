import React from 'react';

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
        <li>
          <p>{`${userDisplayName}:`}</p>
          <p>{this.props.review.content}</p>
        </li>
      );
    } else {
      return null;
    }
  }

}

export default ReviewIndexDetail;
