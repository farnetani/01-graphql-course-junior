const user = async (_, { id }, { getUsers }) => {
  const response = await getUsers('/' + id)
  const user = await response.json()
  if (user === undefined) {
    return {}
  }
  return user
}

const users = async (_, { input }, { getUsers }) => {
  const apiFiltersInput = new URLSearchParams(input)
  const users = await getUsers('/?' + apiFiltersInput)

  return users.json()
}

export const userResolvers = {
  Query: {
    // Mover para uma função separada
    // user: () => {
    //   return {
    //     id: '1',
    //     userName: 'Junior',
    //   }

    // user: user,
    user,
    users,
  },
}
