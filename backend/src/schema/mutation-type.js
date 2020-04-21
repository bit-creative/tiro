import { gql } from "apollo-server-express"

const mutationTypeDef = gql`
  type Mutation {
    login: String
  }
`

export default mutationTypeDef
