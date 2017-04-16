export const fetchMatchingCategories = term => (
  $.ajax({
      method: 'GET',
      url: '/api/categories',
      data: term,
      success: res => console.log(res)
  })
);
