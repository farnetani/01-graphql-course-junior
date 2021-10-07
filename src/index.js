import { ApolloServer, gql } from 'apollo-server'

// Types Scalar: ID, String, Int, Float, Boolean
// Por padrão vem null, se nao quiser, tem que por !
const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID
      name: String!
      age: Int
      salary: Float
      married: Boolean!
      arrayString: [String!]!
    }
  `,
  resolvers: {
    Query: {
      id: () => 1,
      name: () => 'Junior',
      age: () => 30,
      salary: () => 2000.5,
      married: () => false,
      arrayString: () => ['A', 'B'],
    },
  },
})

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`)
})
