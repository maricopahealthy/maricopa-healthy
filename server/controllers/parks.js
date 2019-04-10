const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all parks in Parks table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Park>}
   */
  find: (req, res) => {

  },

  /**
   * findById() returns park from Parks table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Park}
   */
  findById: (req, res) => {

  },

  /**
   * findByIdAndDelete deletes park from Parks table matching unique _id property.
   * @param req
   * @param res
   * @return {Void}
   */
  findByIdAndDelete: (req, res) => {

  },

};
