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
    knex("active").where("id", req.params.id)
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findByIdAndDelete deletes activity from Activities table matching unique _id property and returns deleted item.
   * @param req
   * @param res
   * @return {Activity}
   */
  findByIdAndDelete: (req, res) => {
    knex("activity")
      .where("id", req.params.id)
      .del("*")
        .then(data => res.send(data))
        .catch(err => console.error(err));
  },

};
