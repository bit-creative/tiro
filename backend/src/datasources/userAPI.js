import { MongoDataSource } from "apollo-datasource-mongodb"

/**
 * Extends Apollo's MongoDB datasource class
 * to provide custom business logic management
 *
 * @class UserAPI
 */
class UserAPI extends MongoDataSource {
  /**
   *
   * @param {Model} model A mongoose Collection model (or a raw mongoDB collection)
   */
  constructor(model) {
    super(model)
  }

  /**
   * This is a function that gets called by ApolloServer when being setup.
   * This function gets called with the datasource config including things
   * like caches and context. We'll assign this.context to the request context
   * here, so we can know about the user making requests
   */
  initialize(config) {
    this.context = config.context
  }

  async getUserById(id) {
    return this.findOneById(id)
  }

  //  TODO: create other business logic related to users
}

export default UserAPI
