
exports.up = function(knex, Promise) {
  return knex.schema.createTable("park_features", table => {
    table.increments();
    table.integer("park_id")
      .references('id')
      .inTable('parks')
      .notNullable()
      .onDelete('CASCADE');
    table.integer("active_id")
      .references('id')
      .inTable('active')
      .notNullable()
      .onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("park_features");
};
