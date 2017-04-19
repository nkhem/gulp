export const fetchBusinessesByTerm = input => {
  return $.ajax({
      method: 'GET',
      url: '/api/businesses',
      data: { term : input }
  });
};

export const fetchBusinessesByCategory = categoryAlias => {
  return $.ajax({
      method: 'GET',
      url: '/api/businesses',
      data: { category : categoryAlias }
  });
};

export const fetchBusiness = bizName => {
  return $.ajax({
      method: 'GET',
      url: '/api/businesses/0',
      data: { bizName : bizName }
  });//RETURNTOME
};
