import mutationResolver from "./mutation-resolver"
import feedResolver from "./feed-resolver"
import jobSourceResolver from "./jobSource-resolver"
import applicationBoardResolver from "./applicationBoard-resolver"
import userResolver from "./user-resolver"

const resolvers = {
  Query: {
    hello: (_, __, ctx) => "Hello Modular Setup!!",
  },
  Mutation: mutationResolver,
  Feed: feedResolver,
  JobSource: jobSourceResolver,
  ApplicationBoard: applicationBoardResolver,
  User: userResolver,
}

export default resolvers
