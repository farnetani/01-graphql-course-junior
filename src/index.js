import { ApolloServer } from 'apollo-server'
import { resolvers, typeDefs } from './graphql/schema'

// Types Scalar: ID, String, Int, Float, Boolean
// Por padrão vem null, se nao quiser, tem que por !
const server = new ApolloServer({
  // typeDefs: typeDefs,
  typeDefs,
  // resolvers: resolvers,
  resolvers,
})

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`)
})
