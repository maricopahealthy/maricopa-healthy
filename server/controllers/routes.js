// import route handlers
const auth = require("./auth");
const users = require("./users");
const markets = require("./markets");
const recipes = require("./recipes");
const parks = require("./parks");
const active = require("./active");
const events = require("./events");
const resources = require("./resources");
const favorites = require("./favorites");
const subscriptions = require("./subscriptions");
const notifications = require("./notifications");
const produce = require("./produce");

module.exports = (app) => {

  // Routes for Auth
  app.post("/api/login");
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

  // Routes for active
  app.get("/active", active.find);
  app.get("/active/:id", active.findById);
  app.delete("/active/:id", active.findByIdAndDelete);

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
  app.get("/favorites/user/:userId", favorites.findByUserId);
  app.delete("/favorites/:id", favorites.findByIdAndDelete);

  // Routes for Subscriptions
  app.get("/subscriptions", subscriptions.find);
  app.get("/subscriptions/:id", subscriptions.findById);
  app.get("/subscriptions/user/:userId", subscriptions.findByUserId);
  app.delete("/subscriptions/:id", subscriptions.findByIdAndDelete);

  // Routes for Notifications
  app.get("/notifications", notifications.find);
  app.get("/notifications/:id", notifications.findById);
  app.delete("/notifications/:id", notifications.findByIdAndDelete);

  // Routes for SeasonalProduce
  app.get("/produce", produce.find);
  app.get("/produce/:id", produce.findById);
  app.get("/produce/market/:marketId", produce.findByUserId);
  app.delete("/produce/:id", produce.findByIdAndDelete);

  app.get("/test", (req, res) => {res.send('hello world')});

};