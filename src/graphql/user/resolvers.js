const user = async (_, { id, teste }, { getUsers }) => {
  console.log('TESTE', teste)
  const response = await getUsers('/' + id)
  const user = await response.json()
  if (user === undefined) {
    return {}
  }
  return user
}

const users = async (_, __, { getUsers }) => {
  const users = await getUsers()

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
