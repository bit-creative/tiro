import { gql } from "apollo-server-express"

const jobSourceTypeDef = gql`
  type JobSource {
    id: ID!
  }
`

export default jobSourceTypeDef
