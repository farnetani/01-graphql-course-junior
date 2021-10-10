import { gql } from 'apollo-server-core'
export const userTypeDefs = gql`
  extend type Query {
    user(id: ID!, teste: Boolean): User
    users: [User!]!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    indexRef: Int!
    createdAt: String!
    # posts: [Post!]!
  }
`

// {
//   "id": "771",
//   "firstName": "Márcia",
//   "lastName": "Carvalho",
//   "userName": "marcia_carvalho81",
//   "indexRef": 1,
//   "createdAt": "2016-12-08T00:49:39.870Z"
// },
