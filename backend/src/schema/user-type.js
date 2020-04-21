import { gql } from "apollo-server-express"

const userTypeDef = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String
    createdAt: String!
    updatedAt: String!
    preferredPosition: String
    resumes: [Resume]!
    coverLetters: [CoverLetter]!
    boards: [ApplicationBoard]!
    sharedBoards: [ApplicationBoard]!
    recentSearches: [String]!
    jobSources: [JobSource]!
    feeds: [Feed]!
  }
`

export default userTypeDef
