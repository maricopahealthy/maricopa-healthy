const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all subscriptions in Subscriptions table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Subscription>}
   */
  find: (req, res) => {

  },

  /**
   * findById() returns subscription from Subscriptions table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Subscription}
   */
  findById: (req, res) => {

  },

  /**
   * findByIdAndDelete deletes subscription from Subscriptions table matching unique _id property.
   * @param req
   * @param res
   * @return {Void}
   */
  findByIdAndDelete: (req, res) => {

  },

};
