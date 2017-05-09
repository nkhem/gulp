import React from 'react';
import ReviewIndex from './review_index';
import ReviewForm from './review_form';

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        id: '',
        content: '',
        rating: '',
        userId: (props.currentUser ? props.currentUser.id : ''),
        businessId: props.businessId
    };

    this.editInProgress = false;
    this.sendReviewForEdit = this.sendReviewForEdit.bind(this);
  }

  sendReviewForEdit(review){
    this.toggleEditInProgress();

    this.setState({
      id: review.id,
      content: review.content,
      rating: review.rating,
      userId: review.user_id,
      businessId: review.business_id,
    });

    console.log('sendReviewForEdit, state:', this.state);
  }

  toggleEditInProgress(){
    this.editInProgress = !this.editInProgress;
  }

  render() {
      return (
        <div className={`review-section ${this.props.className}`}>
          <ReviewForm
            toggleEditInProgress={() => this.toggleEditInProgress()}
            editInProgress={this.editInProgress}
            currentUser={this.props.currentUser}
            createReview={this.props.createReview}
            errors={this.props.errors}
            clearReviewErrors={this.props.clearReviewErrors}
            currentReview={this.state}
            deleteReview={this.props.deleteReview}/>
          <ReviewIndex
            isUserProfile={this.props.isUserProfile}
            reviews={this.props.reviews}
            fetchUser={this.props.fetchUser}
            currentUser={this.props.currentUser}
            deleteReview={this.props.deleteReview}
            sendReviewForEdit={this.sendReviewForEdit}/>
      </div>
    );
  }

}

export default ReviewSection;
