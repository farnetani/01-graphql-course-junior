import { ApolloServer } from 'apollo-server'
import { resolvers, typeDefs } from './graphql/schema'
import { context } from './graphql/context'

// Types Scalar: ID, String, Int, Float, Boolean
// Por padrão vem null, se nao quiser, tem que por !
const server = new ApolloServer({
  // typeDefs: typeDefs,
  typeDefs,
  // resolvers: resolvers,
  resolvers,
  context: context,
})

server.listen(4007).then(({ url }) => {
  console.log(`Server listening on url ${url}`)
})
