import express from "express"
import { ApolloServer } from "apollo-server-express"
import connect from "./db"

import typeDefs from "./schema"
import resolvers from "./resolvers"

const context = async req => {
  return { foo: "bar" }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
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
