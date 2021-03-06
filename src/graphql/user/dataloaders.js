import DataLoader from 'dataloader'

// export const makeUserDataLoader = (getUsers) => {
//   console.log('Dataloader foi criado!')
//   return new DataLoader(async (ids) => {
//     // console.log(ids)
//     const urlQuery = ids.join('&id=')
//     const response = await getUsers('?id=' + urlQuery)
//     const users = await response.json()
//     return ids.map((id) => users.find((user) => user.id === id))
//   })
// }
export const makeUserDataLoader = (getUsers) => {
  return new DataLoader(async (ids) => {
    const urlQuery = ids.join('&id=')
    const users = await getUsers('?id=' + urlQuery)
    return ids.map((id) => users.find((user) => user.id === id))
  })
}
