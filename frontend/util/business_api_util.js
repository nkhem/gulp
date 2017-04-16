export const fetchBusinesses = input => {
  return $.ajax({
      method: 'GET',
      url: '/api/businesses',
      data: { term : input },
  });
};
