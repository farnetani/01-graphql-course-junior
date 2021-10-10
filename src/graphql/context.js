import fetch from 'node-fetch'

export const context = () => {
  return {
    fetch,
    getUsers: (path = '/') => fetch('http://localhost:3000/users' + path),
  }
}
