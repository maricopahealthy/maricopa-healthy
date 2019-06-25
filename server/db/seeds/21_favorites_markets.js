
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites_markets').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorites_markets').insert([
        {user_id: "1", resource_id: "1"},
        {user_id: "2", resource_id: "2"},
        {user_id: "1", resource_id: "3"},
        {user_id: "2", resource_id: "4"},
        {user_id: "1", resource_id: "5"},
      ]);
    });
};
