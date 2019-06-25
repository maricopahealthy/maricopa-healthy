
exports.up = function(knex, Promise) {
  return knex.schema.createTable("favorites_recipes", table => {
    table.increments();
    table.integer("user_id")
      .references("id")
      .inTable("users")
      .notNullable()
      .onDelete("CASCADE");
    table.integer("resource_id")
      .references("id")
      .inTable("recipes")
      .notNullable()
      .onDelete('CASCADE');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("favorites_recipes");
};
