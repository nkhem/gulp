import React from 'react';

class ReviewIndexDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  componentWillMount() {
    this.props.fetchUser(this.props.review.userId)
      .then(res => this.setState({ user: res.user}));
  }

  render() {
    console.log('this.state:', this.state);
    console.log(this.props.review);
    return (
      <li>
        {this.props.review.content}
      </li>
    );
  }

}

export default ReviewIndexDetail;
