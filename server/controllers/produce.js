const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all seasonal_produce in Seasonal Produce table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<seasonal_produce>}
   */
  find: (req, res) => {
    knex("seasonal_produce")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findById() returns seasonal_produce from Seasonal Produce table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<seasonal_produce>}
   */
  findById: (req, res) => {
    knex("seasonal_produce")
      .where("id", req.params.id)
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findByMarketId() returns all seasonal_produce from Seasonal Produce table matching unique market id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<seasonal_produce>}
   */
  findByUserId: (req, res) => {
    knex.select("*")
      .from("market_produce")
      .join("seasonal_produce", "seasonal_produce.id", "market_produce.seasonal_produce_id")
      .where("market_id", req.params.marketId)
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findByIdAndDelete deletes seasonal_produce from Seasonal Produce table matching unique _id property and returns deleted item.
   * @param req
   * @param res
   * @return {seasonal_produce}
   */
  findByIdAndDelete: (req, res) => {
    knex("seasonal_produce")
      .where("id", req.params.id)
      .del("*")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  }
};
