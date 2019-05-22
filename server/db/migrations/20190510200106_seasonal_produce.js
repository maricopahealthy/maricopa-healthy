exports.up = function(knex, Promise) {
  return knex.schema.createTable("seasonal_produce", table => {
    table.increments();
    // todo: add table columns
    table.string("season");
    table.string("start_month");
    table.string("end_month");
    table.string("name");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("seasonal_produce");
};
