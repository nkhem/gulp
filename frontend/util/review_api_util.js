export const fetchReviews = businessId => {
  return $.ajax({
      method: 'GET',
      url: '/api/reviews',
      data: { businessId : businessId },
  });
};

export const fetchReview = reviewId => {
  return $.ajax({
      method: 'GET',
      url: `/api/reviews/${reviewId}`
  });
};

export const createReview = review => {
  return $.ajax({
      method: 'POST',
      url: '/api/reviews',
      data: { review:review },
  });
};

export const deleteReview = review => {
  return $.ajax({
      method: 'DELETE',
      url: `/api/reviews/${review.id}`,
      data: { reviewId: review.id },
  });
};

export const editReview = review => {
  return $.ajax({
      method: 'PATCH',
      url: `/api/reviews/${review.id}`,
      data: { review: review },
  });
};
