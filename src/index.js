import { ApolloServer, gql } from 'apollo-server'

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID
      name: String
    }
  `,
  resolvers: {
    Query: {
      id: () => 1,
      name: () => 'Junior',
    },
  },
})

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`)
})
