exports.up = function (knex, Promise) {
  return knex.schema.createTable("recipes", table => {
    table.increments();
    // todo: add table columns
    table.string("thumbnail"); // URL?
    table.string("name");
    table.string("meal_type");
    table.string("ingredients"); // could this be an array?
    table.string("directions"); // string array?
    table.string("nutrition_facts"); // string array?
    table.string("servings");
    table.string("attribution"); // attributes reicpe to Author
    table.boolean("featured"); // could be boolean
    table.string("rating"); // join table?
    table.string("reviews");
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("recipes");
};
