import { MongoDataSource } from "apollo-datasource-mongodb"

/**
 * Extends Apollo's MongoDB datasource class
 * to provide custom business logic management
 *
 * @class UserAPI
 * @property {Model} model
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
    super.initialize(config)
  }

  async getUserById(id) {
    return this.findOneById(id)
  }

  async create(user) {
    console.log(this)
    return this.model.create(user)
  }

  async find(filter) {
    const result = await this.model.find(filter)
    return result.length
  }

  //  TODO: create other business logic related to users
}

export default UserAPI
