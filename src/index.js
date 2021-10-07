import { ApolloServer, gql } from 'apollo-server'

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => {
        return 'Olá Mundo!'
      },
    },
  },
})

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`)
})
