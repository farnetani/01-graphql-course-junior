import { gql } from 'apollo-server-core'

export const postTypeDefs = gql`
  extend type Query {
    post: Post!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    # userId: String!
    # user: User!
    indexRef: Int!
    createdAt: String!
  }
`

// "id": "645",
// "title": "Nemo rerum dolorem.",
// "body": "Accusantium quis est molestiae. Aliquam voluptatem rerum eaque. Nihil error nam voluptates aut eum libero. Est quasi hic dolor itaque. Quis officia distinctio et non itaque. Voluptate odio enim.\n \rAutem ut blanditiis incidunt temporibus voluptatem consequatur vero harum itaque. Aut eveniet unde dolores consequatur et. Id sequi deleniti incidunt. Vitae et magni.\n \rConsectetur aperiam error tempora at harum maxime. Repellat et voluptas. Sint nesciunt animi aperiam sed maxime qui mollitia nihil. Aut illo labore voluptatem quia minus.",
// "userId": "115",
// "indexRef": 1,
// "createdAt": "2020-12-19T19:25:24.495Z",
