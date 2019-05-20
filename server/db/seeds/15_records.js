
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('records').del()
    .then(function () {
      // Inserts seed entries
      return knex('records').insert([
        { 
          record_type: 'market',
          market_id: 1
        },
        {
          record_type: 'park',
          park_id: 1
        },
        {
          record_type: 'event',
          event_id: 1
        }
      ]);
    });
};
