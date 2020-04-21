import express from "express"
import { ApolloServer } from "apollo-server-express"
import connect from "./db"

import typeDefs from "./schema"
import resolvers from "./resolvers"
import UserAPI from "./datasources/userAPI"
import { User } from "./db"

const context = async req => {
  // FIXME: just for testing
  return { foo: "bar" }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    User: new UserAPI(User),
  }),
  context,
})

const app = new express()
server.applyMiddleware({ app })

export const start = async options => {
  try {
    const { mongodbURI, ...expressOptions } = options
    await connect(mongodbURI)
    app.listen(expressOptions, () => {
      console.log(
        `🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
      )
    })
  } catch (e) {
    console.error(e)
  }
}
