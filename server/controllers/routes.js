// import route handlers
const auth = require("./auth");
const users = require("./users");

module.exports = (app) => {

  // Routes for Auth
  app.post("/login");
  app.post("/register");
  // Routes for Users
  app.get("/users", users.find);
  app.get("/users/{id}", users.findById);
  app.delete("/users/{id}", users.findByIdAndDelete);

  // Routes for Markets

  // Routes for Recipes

  // Routes for Parks

  // Routes for Activities

  // Routes for Events

  // Routes for Resources

  // Routes for Favorites

  // Routes for Subscriptions

  // Routes for Notifications

};