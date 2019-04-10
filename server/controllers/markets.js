const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all markets in Markets table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Market>}
   */
  find: (req, res) => {

  },

  /**
   * findById() returns market from Markets table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Market}
   */
  findById: (req, res) => {

  },

  /**
   * findByIdAndDelete deletes market from Markets table matching unique _id property.
   * @param req
   * @param res
   * @return {Void}
   */
  findByIdAndDelete: (req, res) => {

  },

};
