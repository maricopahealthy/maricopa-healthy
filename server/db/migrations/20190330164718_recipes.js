exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", table => {
    table.increments();
    table.string("thumbnail"); // URL?
    table.string("name");
    table.string("meal_type");
    table.string("ingredients", 2000); // could this be an array?
    table.string("directions", 2000); // string array?
    table.string("nutrition_facts", 2000); // string array?
    table.string("servings");
    table.string("attribution"); // attributes recipe to Author
    table.boolean("featured"); // could be boolean
    table.string("rating"); // join table?
    table.string("reviews");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recipes");
};
