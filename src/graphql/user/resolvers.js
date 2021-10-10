import fetch from 'node-fetch'

const user = async () => {
  const user = await fetch('http://localhost:3000/user/1')
  return user.json()
  // return {
  //   id: '1',
  //   userName: 'Junior',
  // }
}

const users = async () => {
  // return [
  //   {
  //     id: '1',
  //     userName: 'Junior 01',
  //   },
  //   {
  //     id: '2',
  //     userName: 'Junior 02',
  //   },
  //   {
  //     id: '3',
  //     userName: 'Junior 03',
  //   },
  // ]
  const users = await fetch(
    'http://localhost:3000/users?_sort=indexRef&_order=asc&_start=0',
  )

  // console.log(users.json())
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
