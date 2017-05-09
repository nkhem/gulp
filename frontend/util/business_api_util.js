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

export const fetchBusiness = titleOrId => {
  let data;
  let url;
  if(typeof titleOrId === "number" || titleOrId.replace(/[^0-9]/g, '').length === titleOrId.length){
    data = { businessId: parseInt(titleOrId) };
    url = `/api/businesses/${parseInt(titleOrId)}`;
  } else {
    data = { bizName : titleOrId };
    url = '/api/businesses/0';
  }

  return $.ajax({
      method: 'GET',
      url,
      data
  });
};
