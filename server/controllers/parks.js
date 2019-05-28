const knex = require("../db/knex");

module.exports = {
  /**
   * find returns all parks in Parks table.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @return {Array<Park>}
   */
  find: (req, res) => {
    knex.select("parks.*", knex.raw("ARRAY_AGG(DISTINCT active.name) AS features"), knex.raw("JSON_AGG(DISTINCT hours.*) AS hours"))
      .from("parks")
      .join("hours", "hours.park_id", "parks.id")
      .join("park_features", "park_features.park_id", "parks.id")
      .join("active", "park_features.active_id", "active.id")
      .groupBy("parks.id")
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
    knex.select("parks.*", knex.raw("ARRAY_AGG(DISTINCT active.name) AS features"), knex.raw("JSON_AGG(DISTINCT hours.*) AS hours"))
      .from("parks")
      .join("hours", "hours.park_id", "parks.id")
      .join("park_features", "park_features.park_id", "parks.id")
      .join("active", "park_features.active_id", "active.id")
      .groupBy("parks.id")
      .where("parks.id", req.params.id)
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
