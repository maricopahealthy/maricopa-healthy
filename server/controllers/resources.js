const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all resources in Resources table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Resource>}
   */
  find: (req, res) => {

  },

  /**
   * findById() returns resource from Resources table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Resource}
   */
  findById: (req, res) => {

  },

  /**
   * findByIdAndDelete deletes Resource from Resources table matching unique _id property.
   * @param req
   * @param res
   * @return {Void}
   */
  findByIdAndDelete: (req, res) => {

  },

};
