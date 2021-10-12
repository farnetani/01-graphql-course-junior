// const user = async (_, { id }, { getUsers }) => {
//   const response = await getUsers('/' + id)
//   const user = await response.json()
//   if (user === undefined) {
//     return {}
//   }
//   return user
// }

// const users = async (_, { input }, { getUsers }) => {
//   const apiFiltersInput = new URLSearchParams(input)
//   const users = await getUsers('/?' + apiFiltersInput)

//   return users.json()
// }

// Com Datasources
const users = async (_, { input }, { dataSources }) => {
  const users = await dataSources.userApi.getUsers(input)
  return users
}

const user = async (_, { id }, { dataSources }) => {
  const user = await dataSources.userApi.getUser(id)
  return user
}

// const posts = async ({ id }, _, { postDataLoader }) => {
//   // Dataloader
//   return postDataLoader.load(id)
// }

const posts = async ({ id }, _, { dataSources }) => {
  // Dataloader
  // return dataSources.postApi.dataLoader.load(id)
  return dataSources.postApi.batchLoadByUserId(id)
}

export const userResolvers = {
  Query: {
    user,
    users,
  },
  User: { posts },
}
