import { gql } from "apollo-server-express"

const jobPostingTypeDef = gql`
  type JobPosting {
    id: ID!
  }
`
export default jobPostingTypeDef
