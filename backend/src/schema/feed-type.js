import { gql } from "apollo-server-express"

const feedTypeDef = gql`
  type Feed {
    id: ID!
  }
`
export default feedTypeDef
