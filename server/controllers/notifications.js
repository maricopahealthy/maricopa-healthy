const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all notifications in Notifications table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Resource>}
   */
  find: (req, res) => {
    knex("notifications")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findById() returns notification from Notifications table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Resource}
   */
  findById: (req, res) => {
    knex("notifications")
      .where("id", req.params.id)
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findByIdAndDelete deletes notification from Notifications table matching unique _id property.
   * @param req
   * @param res
   * @return {Void}
   */
  findByIdAndDelete: (req, res) => {
    knex("notifications")
      .where("id", req.params.id)
      .del("*")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  }
};
