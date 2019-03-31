const knex = require("../db/knex");

module.exports = {

  /**
   * find returns all users in Users table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<User>}
   */
  find: (req, res) => {
  },
  /**
   * findById returns user from Users table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {User}
   */
  findById: (req, res) => {
  },

  /**
   * findByIdAndDelete deletes user from Users table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Void}
   */
  findByIdAndDelete: (req, res) => {
  },

};