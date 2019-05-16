const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all parks in Parks table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Park>}
   */
  find: (req, res) => {
    knex("parks")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findById() returns park from Parks table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Park}
   */
  findById: (req, res) => {
    knex("parks")
      .where("id", req.params.id)
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findByIdAndDelete deletes park from Parks table matching unique _id property and returns deleted item.
   * @param req
   * @param res
   * @return {Park}
   */
  findByIdAndDelete: (req, res) => {
    knex("parks")
      .where("id", req.params.id)
      .del("*")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  }
};
