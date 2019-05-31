
exports.up = function (knex, Promise) {
  return knex.schema.createTable("market_produce", table => {
    table.increments();
    table.integer("market_id")
      .references('id')
      .inTable('markets')
      .notNullable()
      .onDelete('CASCADE');
    table.integer("seasonal_produce_id")
      .references('id')
      .inTable('seasonal_produce')
      .notNullable()
      .onDelete('CASCADE');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("market_produce");
};

