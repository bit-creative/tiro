// Provide resolver function for schema
const resolvers = {
  Query: {
    hello: (_, __, ctx) => "Hello Apollo Server Express",
  },
}

export default resolvers
