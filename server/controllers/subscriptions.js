const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all subscriptions in Subscriptions table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Subscription>}
   */
  find: (req, res) => {
    knex("subscriptions")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findById() returns subscription from Subscriptions table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Subscription}
   */
  findById: (req, res) => {
    knex("subscriptions")
      .where("id", req.params.id)
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findByUserId() returns all subscriptions from Subscriptions table matching unique user id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Subscription>}
   */
  findByUserId: (req, res) => {
    knex("subscriptions")
      .where("user.id", req.params.userId)
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findByIdAndDelete deletes subscription from Subscriptions table matching unique _id property and returns deleted item.
   * @param req
   * @param res
   * @return {Subscription}
   */
  findByIdAndDelete: (req, res) => {
    knex("subscriptions")
      .where("id", req.params.id)
      .del("*")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * add() Adds Subscription to table and returns that Subscription
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Subscription}
   */
  add: (req, res) => {
    knex("subscriptions")
      .insert(req.body, "*")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  }
};
