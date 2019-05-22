exports.up = function (knex, Promise) {
  return knex.schema.createTable("subscriptions", table => {
    table.increments();
    table.integer("user_id")
        .references('id')
        .inTable('users')
        .notNullable()
        .onDelete('CASCADE');
    table.string("record_type");
    table.integer("recipe_id")
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE');
    table.integer("event_id")
        .references('id')
        .inTable('events')
        .onDelete('CASCADE');
    table.integer("resource_id")
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE');
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("subscriptions");
};
