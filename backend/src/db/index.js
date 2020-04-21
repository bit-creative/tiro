import mongoose from "mongoose"

import User from "./user-model"

const defaultOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

// FIXME: not getting the success log
const connect = async (uri = process.env.MONGODB_URI, opts = {}) => {
  mongoose.connect(uri, {
    ...opts,
    ...defaultOptions,
  })
  const db = mongoose.connection
  db.on("error", console.error.bind(console, "connection error"))
  db.once("open", cb => console.log("Connection Succeeded"))
}
export { User }
export default connect
