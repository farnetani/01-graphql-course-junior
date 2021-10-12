import fetch from 'node-fetch'
import { getPosts, getUsers } from './user/utils'
import { makeUserDataLoader } from './user/dataloaders'
// import { makePostDataLoader } from './post/dataloaders'

const _getUsers = getUsers(fetch)
const _getPosts = getPosts(fetch)

export const context = () => {
  return {
    // postDataLoader: makePostDataLoader(_getPosts),
    userDataLoader: makeUserDataLoader(_getUsers),
    getUsers: _getUsers,
    getPosts: _getPosts,
  }
}
