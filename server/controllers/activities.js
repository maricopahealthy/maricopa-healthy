const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all activities in Activities table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Activity>}
   */
  find: (req, res) => {
    knex("active")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findById() returns activity from Activities table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Activity}
   */
  findById: (req, res) => {
    knex("markets").where("id", req.params.id)
      .then(data => res.send(data))
      .catch(err => console.error(err));
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
