
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites_active').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorites_active').insert([
        {user_id: "1", resource_id: "1"},
        {user_id: "2", resource_id: "2"},
        {user_id: "1", resource_id: "3"},
        {user_id: "2", resource_id: "4"},
        {user_id: "1", resource_id: "5"},
      ]);
    });
};
