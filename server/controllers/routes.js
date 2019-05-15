// import route handlers
const auth = require("./auth");
const users = require("./users");
const markets = require("./markets");
const recipes = require("./recipes");
const parks = require("./parks");
const activities = require("./activities");
const events = require("./events");
const resources = require("./resources");
const favorites = require("./favorites");
const subscriptions = require("./subscriptions");
const notifications = require("./notifications");
const produce = require("./produce");

module.exports = (app) => {

  // Routes for Auth
  app.post("/login");
  app.post("/register");

  // Routes for Users
  app.get("/users", users.find);
  app.get("/users/:id", users.findById);
  app.delete("/users/:id", users.findByIdAndDelete);

  // Routes for Markets
  app.get("/markets", markets.find);
  app.get("/markets/:id", markets.findById);
  app.delete("/markets/:id", markets.findByIdAndDelete);

  // Routes for Recipes
  app.get("/recipes", recipes.find);
  app.get("/recipes/:id", recipes.findById);
  app.delete("/recipes/:id", recipes.findByIdAndDelete);

  // Routes for Parks
  app.get("/parks", parks.find);
  app.get("/parks/:id", parks.findById);
  app.delete("/parks/:id", parks.findByIdAndDelete);

  // Routes for Activities
  app.get("/activities", activities.find);
  app.get("/activities/:id", activities.findById);
  app.delete("/activities/:id", activities.findByIdAndDelete);

  // Routes for Events
  app.get("/events", events.find);
  app.get("/events/:id", events.findById);
  app.delete("/events/:id", events.findByIdAndDelete);

  // Routes for Resources
  app.get("/resources", resources.find);
  app.get("/resources/:id", resources.findById);
  app.delete("/resources/:id", resources.findByIdAndDelete);

  // Routes for Favorites
  app.get("/favorites", favorites.find);
  app.get("/favorites/:id", favorites.findById);
  app.delete("/favorites/:id", favorites.findByIdAndDelete);

  // Routes for Subscriptions
  app.get("/subscriptions", subscriptions.find);
  app.get("/subscriptions/:id", subscriptions.findById);
  app.delete("/subscriptions/:id", subscriptions.findByIdAndDelete);

  // Routes for Notifications
  app.get("/notifications", notifications.find);
  app.get("/notifications/:id", notifications.findById);
  app.delete("/notifications/:id", notifications.findByIdAndDelete);

  // Routes for SeasonalProduce
  app.get("/produce", produce.find);

};