const API_URL = process.env.API_URL || 'http://localhost:3000'
export const getUsers =
  (fetch) =>
  (path = '/') =>
    fetch(API_URL + '/users' + path)
