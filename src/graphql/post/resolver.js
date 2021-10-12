import DataLoader from 'dataloader'
import fetch from 'node-fetch'

const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id)
  const post = await response.json()

  if (Math.random() > 0.5) {
    return {
      statusCode: 500,
      message: 'Post timeout!',
      timeout: 123,
    }
  }

  if (typeof post.id === 'undefined') {
    return {
      statusCode: 404,
      message: 'Post not found!',
      postId: id,
    }
  }

  return post
}

const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInput = new URLSearchParams(input)
  const response = await getPosts('/?' + apiFiltersInput)
  return response.json()
}

// Dataloader
const userDataLoader = new DataLoader(async (ids) => {
  console.log(ids)
  const urlQuery = ids.join('&id=')
  const url = 'http://localhost:3000/users/?id=' + urlQuery
  const response = await fetch(url)
  const users = await response.json()
  // console.log(url)
  // console.log(users)
  return ids.map((id) => users.find((user) => user.id === id))
})

// const user = async (parent) => {
// const user = async ({ userId }, _, { getUsers }) => {
const user = async ({ userId }, _, __) => {
  // Dataloader
  return userDataLoader.load(userId)
  // const response = await getUsers('/' + userId)
  // return response.json()
}

export const postResolvers = {
  Query: { post, posts },
  Post: {
    unixTimestamp: ({ createdAt }) => {
      const timestamp = new Date(createdAt).getTime() / 1000
      return Math.floor(timestamp)
    },
    user: user,
  },
  PostResult: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== 'undefined') return 'PostNotFoundError'
      if (typeof obj.timeout !== 'undefined') return 'PostTimeoutError'
      if (typeof obj.id !== 'undefined') return 'Post'
      return null
    },
  },
  PostError: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== 'undefined') return 'PostNotFoundError'
      if (typeof obj.timeout !== 'undefined') return 'PostTimeoutError'
      return null
    },
  },
}
