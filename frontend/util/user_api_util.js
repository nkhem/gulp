export const fetchUsers = userId => {
  return $.ajax({
      method: 'GET',
      url: '/api/user',
      data: { userId : userId },
  });
};
