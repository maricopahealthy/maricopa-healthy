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
    knex.transaction(async function(trx) {
      let records = [];
      let markets = await trx.select("*")
        .from("markets")
        .join("favorites_markets", "markets.id", "=", "favorites_markets.resource_id")
        .where("favorites_markets.user_id", req.params.userId);
      records = records.concat(markets);

      let recipes = await trx.select("*")
        .from("recipes")
        .join("favorites_recipes", "recipes.id", "=", "favorites_recipes.resource_id")
        .where("favorites_recipes.user_id", req.params.userId);
      records = records.concat(recipes);

      let parks = await trx.select("*")
        .from("parks")
        .join("favorites_parks", "parks.id", "=", "favorites_parks.resource_id")
        .where("favorites_parks.user_id", req.params.userId);
      records = records.concat(parks);

      let active = await trx.select("*")
        .from("active")
        .join("favorites_active", "active.id", "=", "favorites_active.resource_id")
        .where("favorites_active.user_id", req.params.userId);
      records = records.concat(active);

      let events = await trx.select("*")
        .from("events")
        .join("favorites_events", "events.id", "=", "favorites_events.resource_id")
        .where("favorites_events.user_id", req.params.userId);
      records = records.concat(events);

      let resources = await trx.select("*")
        .from("resources")
        .join("favorites_resources", "resources.id", "=", "favorites_resources.resource_id")
        .where("favorites_resources.user_id", req.params.userId);
      records = records.concat(resources);

      return records;
    })
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
  }
};
