const user = () => {
  return {
    id: '1',
    userName: 'Junior',
  }
}

const users = () => {
  return [
    {
      id: '1',
      userName: 'Junior 01',
    },
    {
      id: '2',
      userName: 'Junior 02',
    },
    {
      id: '3',
      userName: 'Junior 03',
    },
  ]
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
