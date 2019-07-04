// exports.up = function (knex, Promise) {
//   return knex.schema.createTable("favorites", table => {
//     table.increments();
//     table.integer("user_id")
//         .references('id')
//         .inTable('users')
//         .notNullable()
//         .onDelete('CASCADE');
//     table.string("record_type");
//     table.integer("market_id")
//         .references('id')
//         .inTable('markets')
//         .onDelete('CASCADE');
//     table.integer("recipe_id")
//         .references('id')
//         .inTable('recipes')
//         .onDelete('CASCADE');
//     table.integer("park_id")
//         .references('id')
//         .inTable('parks')
//         .onDelete('CASCADE');
//     table.integer("active_id")
//         .references('id')
//         .inTable('active')
//         .onDelete('CASCADE');
//     table.integer("event_id")
//         .references('id')
//         .inTable('events')
//         .onDelete('CASCADE');
//     table.integer("resource_id")
//         .references('id')
//         .inTable('resources')
//         .onDelete('CASCADE');
//     table.timestamps(true, true);
//   })
// };

// exports.down = function (knex, Promise) {
//   return knex.schema.dropTable("favorites");
// };
