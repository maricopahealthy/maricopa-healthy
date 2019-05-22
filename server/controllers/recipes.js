const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all recipes in Recipes table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Recipes>}
   */
  find: (req, res) => {
    knex("recipes")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findById() returns recipe from Recipes table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Recipe}
   */
  findById: (req, res) => {
    knex("recipes")
      .where("id", req.params.id)
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findByIdAndDelete deletes recipe from Recipes table matching unique _id property.
   * @param req
   * @param res
   * @return {Void}
   */
  findByIdAndDelete: (req, res) => {
    knex("recipes")
      .where("id", req.params.id)
      .del("*")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  }
};
