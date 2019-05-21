
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subscriptions').del()
    .then(function () {
      // Inserts seed entries
      return knex('subscriptions').insert([
        {
          user_id: 1,
          record_type: "recipe",
          recipe_id: 1
        },
      ]);
    });
};
