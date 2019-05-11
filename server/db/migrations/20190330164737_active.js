exports.up = function (knex, Promise) {
  return knex.schema.createTable("Active", table => {
    table.increments();
    // todo: add table columns
    table.string("thumbnail");
    table.string("name");
    table.string("description");
    table.rating("rating");
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("Activities");
};
