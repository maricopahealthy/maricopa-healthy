const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all markets in Markets table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Market>}
   */
  find: (req, res) => {
    knex.select("markets.*", knex.raw("JSON_AGG(hours.*) AS hours"))
      .from("markets")
      .join("hours", "hours.market_id", "markets.id")
      .groupBy("markets.id")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findById() returns market from Markets table matching unique _id property.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Market}
   */
  findById: (req, res) => {
    knex.select("markets.*", knex.raw("JSON_AGG(hours.*) AS hours"))
      .from("markets")
      .join("hours", "hours.market_id", "markets.id")
      .groupBy("markets.id")
      .where("markets.id", req.params.id)
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

  /**
   * findByIdAndDelete deletes market from Markets table matching unique _id property and returns deleted item.
   * @param req
   * @param res
   * @return {Market}
   */
  findByIdAndDelete: (req, res) => {
    knex("markets")
      .where("id", req.params.id)
      .del("*")
      .then(data => res.send(data))
      .catch(err => console.error(err));
  },

};
