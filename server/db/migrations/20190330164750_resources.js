exports.up = function (knex, Promise) {
  return knex.schema.createTable("resources", table => {
    table.increments();
    // todo: add table columns
    table.string("thumbnail");
    table.string("name");
    table.string("teaser");
    table.string("phone_number");
    table.string("website");
    table.string("description");
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("resources");
};
