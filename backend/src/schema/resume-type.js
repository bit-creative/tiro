import { gql } from "apollo-server-express"

const resumeTypeDef = gql`
  type Resume {
    id: ID!
  }
`
export default resumeTypeDef
