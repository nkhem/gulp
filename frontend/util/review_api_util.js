export const fetchReviews = businessId => {
  return $.ajax({
      method: 'GET',
      url: '/api/reviews',
      data: { businessId : businessId },
  });
};

export const createReview = review => {
  return $.ajax({
      method: 'POST',
      url: '/api/reviews',
      data: { review:review },
  });
};

export const deleteReview = reviewId => {
  return $.ajax({
      method: 'DELETE',
      url: `/api/reviews/${reviewId}`,
      data: { reviewId: reviewId },
  });
};
