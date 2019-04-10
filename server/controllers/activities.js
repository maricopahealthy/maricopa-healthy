const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all activities in Activities table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Activity>}
   */
  find: (req, res) => {

  },

  /**
   * findById() returns activity from Activities table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Activity}
   */
  findById: (req, res) => {

  },

  /**
   * findByIdAndDelete deletes activity from Activities table matching unique _id property.
   * @param req
   * @param res
   * @return {Void}
   */
  findByIdAndDelete: (req, res) => {

  },

};
