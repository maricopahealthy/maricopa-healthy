const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all produce in Seasonal Produce table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Recipes>}
   */
  find: (req, res) => {
    knex("seasonal_produce")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findById() returns produce from Seasonal Produce table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Recipe}
   */
  findById: (req, res) => {
    knex("seasonal_produce")
      .where("id", req.params.id)
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findByIdAndDelete deletes produce from Seasonal Produce table matching unique _id property.
   * @param req
   * @param res
   * @return {Void}
   */
  findByIdAndDelete: (req, res) => {},
  
};