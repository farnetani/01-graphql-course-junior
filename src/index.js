import { ApolloServer, gql } from 'apollo-server'

// Types Scalar: ID, String, Int, Float, Boolean
// Por padrão vem null, se nao quiser, tem que por !
const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: '123',
          userName: 'Junior',
        }
      },
    },
  },
})

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`)
})
