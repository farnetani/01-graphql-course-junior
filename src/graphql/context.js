import fetch from 'node-fetch'
import { getUsers } from './user/utils'
import { makeUserDataLoader } from './user/dataloaders'

const API_URL = process.env.API_URL || 'http://localhost:3000'

export const context = () => {
  return {
    userDataLoader: makeUserDataLoader(getUsers(fetch)),
    getUsers: getUsers(fetch),
    getPosts: (path = '/') => fetch(API_URL + '/posts' + path),
  }
}
