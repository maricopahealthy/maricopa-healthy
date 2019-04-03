const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all events in Events table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Event>}
   */
  find: (req, res) => {

  },

  /**
   * findById() returns event from Event table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Event}
   */
  findById: (req, res) => {

  },

  /**
   * findByIdAndDelete deletes event from Events table matching unique _id property.
   * @param req
   * @param res
   * @return {Void}
   */
  findByIdAndDelete: (req, res) => {

  },

};
