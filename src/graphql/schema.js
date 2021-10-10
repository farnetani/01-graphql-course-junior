import { gql } from 'apollo-server-core'
import { postResolvers } from './post/resolver'
import { postTypeDefs } from './post/typedefs'
import { userResolvers } from './user/resolvers'
import { userTypeDefs } from './user/typedefs'

export const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`
const rootResolvers = {
  Query: {
    _empty: () => true,
  },
}
export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs]
export const resolvers = [rootResolvers, userResolvers, postResolvers]
