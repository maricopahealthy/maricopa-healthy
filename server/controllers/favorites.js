const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all favorites in Favorites table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Favorite>}
   */
  find: (req, res) => {

  },

  /**
   * findById() returns favorite from Favorites table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Favorite}
   */
  findById: (req, res) => {

  },

  /**
   * findByIdAndDelete deletes favorite from Favorites table matching unique _id property.
   * @param req
   * @param res
   * @return {Void}
   */
  findByIdAndDelete: (req, res) => {

  },

};
