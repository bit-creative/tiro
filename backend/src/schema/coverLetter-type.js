import { gql } from "apollo-server-express"

const coverLetterTypeDef = gql`
  type CoverLetter {
    id: ID!
  }
`
export default coverLetterTypeDef
