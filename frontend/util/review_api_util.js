export const fetchReviews = businessId => {
  return $.ajax({
      method: 'GET',
      url: '/api/reviews',
      data: { businessId : businessId },
  });
};
