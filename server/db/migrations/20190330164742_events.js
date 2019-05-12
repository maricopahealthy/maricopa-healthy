exports.up = function (knex, Promise) {
  return knex.schema.createTable("events", table => {
    table.increments();
    // todo: add table columns
    table.string("thumbnail");
    table.string("name");
    table.string("location");
    table.string("address");
    table.string("city");
    table.string("state");
    table.string("zipcode");
    table.string("start_date"); // date?
    table.string("end_date");
    table.string("start_time");
    table.string("end_time");
    table.boolean("recurring");
    table.string("frequency");
    table.string("cost");
    table.string("ages"); // age range, string array?
    table.string("description", 2000); // description of event
    table.string("phone");
    table.string("website"); // website url
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("events");
};
