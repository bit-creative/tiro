import { gql } from "apollo-server-express"

const mutationTypeDef = gql`
  input CaptureEmailInput {
    email: String!
  }
  input SignupInput {
    id: String!
    firstName: String!
    lastName: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type AuthResponse {
    token: String!
    user: User!
  }

  type Mutation {
    captureEmail(input: CaptureEmailInput): User
    signup(input: SignupInput): AuthResponse!
    login(input: LoginInput): AuthResponse!
  }
`

export default mutationTypeDef
