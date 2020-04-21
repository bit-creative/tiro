import dotenv from "dotenv"
import { start } from "./server"

const DEV_MODE = process.env.NODE_ENV !== "production"
dotenv.config({ path: DEV_MODE ? ".env.development" : ".env" })

const options = {
  port: process.env.PORT,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
  mongodbURI: process.env.MONGODB_URI,
}

start(options)
