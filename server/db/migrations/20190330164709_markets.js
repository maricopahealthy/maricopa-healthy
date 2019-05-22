exports.up = function (knex, Promise) {
  return knex.schema.createTable("markets", table => {
    table.increments();
    table.string("name");
    table.string("thumbnail");
    table.string("street_address");
    table.string("city");
    table.string("state");
    table.string("zipcode");
    table.string("phone_number");
    table.string("website_url");
    table.string("hours");
    table.string("produce"); // join table for produce and market (will get really big)
    table.string("payment_methods");
    table.string("rating");
    table.string("reviews");
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("markets");
};
