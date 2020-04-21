import mongoose from "mongoose"

const Schema = mongoose.Schema
export const { ObjectId } = Schema.Types

/**
 * Simple wrapper around `mongoose.model` that adds timestamps to
 * all the models it creates
 *
 * @param {string} name The name of the collection (singular & lowercase)
 * @param {SchemaDefinition} schema The model schema object
 * @return {Model}
 */
export const createModel = (name, schema) =>
  /**
   * @type Model
   */
  mongoose.model(name, new Schema(schema, { timestamps: true }))
