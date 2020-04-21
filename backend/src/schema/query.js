import { gql } from "apollo-server-express"

const queryTypeDef = gql`
  type Query {
    hello: String
  }
`
export default queryTypeDef
