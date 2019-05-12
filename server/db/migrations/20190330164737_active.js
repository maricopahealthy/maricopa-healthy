exports.up = function (knex, Promise) {
  return knex.schema.createTable("active", table => {
    table.increments();
    // todo: add table columns
    table.string("thumbnail");
    table.string("name");
    table.string("description", 2000);
    table.string("rating");
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("active");
};
