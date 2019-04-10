const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all recipes in Recipes table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Recipes>}
   */
  find: (req, res) => {

  },

  /**
   * findById() returns recipe from Recipes table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Recipe}
   */
  findById: (req, res) => {

  },

  /**
   * findByIdAndDelete deletes recipe from Recipes table matching unique _id property.
   * @param req
   * @param res
   * @return {Void}
   */
  findByIdAndDelete: (req, res) => {

  },

};
