export const fetchUser = userId => {
  return $.ajax({
      method: 'GET',
      url: '/api/user',
      data: { userId : userId },
  });
};

export const refreshUser = userId => {
  return $.ajax({
      method: 'GET',
      url: '/api/user',
      data: { userId : userId },
  });
};
