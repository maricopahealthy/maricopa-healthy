
exports.up = function (knex, Promise) {
  return knex.schema.createTable("hours", table => {
    table.increments();
    table.integer("park_id")
      .references('id')
      .inTable('parks')
      .onDelete('CASCADE');
    table.integer("market_id")
      .references('id')
      .inTable('markets')
      .onDelete('CASCADE');
    table.string("header");
    table.string("body");
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("hours");
};