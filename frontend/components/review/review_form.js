import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessId: null,
      userId: null,
      content: '',
      rating: null
    };
  }

  componentWillMount(){
    let userId = this.props.currentUser ? this.props.currentUser.id : null;
    this.setState({
      businessId: this.props.businessId,
      userId: userId
    });
  }

  render() {
    // console.log(this.props);
    // console.log('ReviewForm, this.state:', this.state);
    return (
      <div>
        <form id="new-review-form">

          <input
            type='text'
            placeholder={`current userId: ${this.state.userId}`} />

          <br/>

          <input
            type='text'
            placeholder={`current bizId: ${this.state.businessId}`} />

          <br/>

          <input
            type='text'
            placeholder='rating' />

          <br/>

          <input type='text'
            placeholder='content' />

          <br/>

          <input type="submit" value="Submit Review" />
        </form>
      </div>
    );
  }

}

export default ReviewForm;
