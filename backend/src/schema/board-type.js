import { gql } from "apollo-server-express"

const applicationBoardTypeDef = gql`
  type ApplicationBoard {
    id: ID!
    name: String!
  }
`

export default applicationBoardTypeDef
