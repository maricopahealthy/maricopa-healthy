exports.up = function (knex, Promise) {
  return knex.schema.createTable("Markets", table => {
    table.increments();
    table.string("name");
    table.string("street_address");
    table.string("city");
    table.string("state");
    table.string("zipcode");
    table.string("phone_number");
    table.string("website_url");
    table.string("hours");
    table.string("produce");
    table.string("payment_methods");
    table.string("rating");
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("Markets");
};
