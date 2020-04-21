import { gql } from "apollo-server-express"

const userTypeDef = gql`
  type User {
    id: ID!
    createdAt: String!
    updatedAt: String!
    boards: [ApplicationBoard]!
    sharedBoards: [ApplicationBoard]!
    recentSearches: [String]!
    jobSources: [JobSource]!
    feeds: [Feed]!
  }
`

export default userTypeDef
