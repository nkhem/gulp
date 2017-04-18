export const fetchBusinessesByTerm = input => {
  return $.ajax({
      method: 'GET',
      url: '/api/businesses',
      data: { term : input },
  });
};
