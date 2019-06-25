const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all favorites in Favorites table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Favorite>}
   */
  find: (req, res) => {
    knex("favorites")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findById() returns favorite from Favorites table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Favorite>}
   */
  findById: (req, res) => {
    knex("favorites")
      .where("id", req.params.id)
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findByUserId() returns all favorites from Favorites table matching unique user id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Favorite>}
   */
  findByUserId: (req, res) => {
    knex("favorites")
      .where("user.id", req.params.userId)
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findByIdAndDelete deletes favorite from Favorites table matching unique _id property and returns deleted item.
   * @param req
   * @param res
   * @return {Favorite}
   */
  findByIdAndDelete: (req, res) => {
    knex("favorites")
      .where("id", req.params.id)
      .del("*")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * add() Adds Favorite to table and returns that Favorite
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Favorite}
   */
  add: (req, res) => {
    knex("favorites")
      .insert(req.body, "*")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  }
};
