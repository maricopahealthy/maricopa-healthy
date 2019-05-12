exports.up = function (knex, Promise) {
  return knex.schema.createTable("parks", table => {
    table.increments();
    // todo: add table columns
    table.string("thumbnail");
    table.string("name");
    table.string("street_address");
    table.string("city");
    table.string("state");
    table.string("zipcode");
    table.string("phone");
    table.string("website");
    table.string("hours");
    table.string("features");
    table.string("ratings");
    table.string("reviews");
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("parks");
};
