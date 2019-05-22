
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('park_features').del()
    .then(function () {
      // Inserts seed entries
      return knex('park_features').insert([
        {
          park_id: 1,
          active_id: 1
        },
        {
          park_id: 1,
          active_id: 3
        },
        {
          park_id: 1,
          active_id: 4
        },
        {
          park_id: 2,
          active_id: 1
        },
        {
          park_id: 2,
          active_id: 2
        },
        {
          park_id: 3,
          active_id: 2
        },
        {
          park_id: 3,
          active_id: 3
        },
        {
          park_id: 3,
          active_id: 4
        },
        
      ]);
    });
};
