export const fetchCategories = input => {
  return $.ajax({
      method: 'GET',
      url: '/api/categories',
      data: { term : input },
  });
};
