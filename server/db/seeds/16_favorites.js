
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorites').insert([
        {
          user_id: 1,
          record_id: 1
        },
        {
          user_id: 1,
          record_id: 2
        },
      ]);
    });
};
