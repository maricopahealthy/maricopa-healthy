
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('market_produce').del()
    .then(function () {
      // Inserts seed entries
      return knex('market_produce').insert([
        {
          market_id: 1,
          seasonal_produce_id: 1
        },
        {
          market_id: 1,
          seasonal_produce_id: 24
        },
        {
          market_id: 1,
          seasonal_produce_id: 35
        },
        {
          market_id: 1,
          seasonal_produce_id: 78
        },
        {
          market_id: 1,
          seasonal_produce_id: 100
        },
        {
          market_id: 2,
          seasonal_produce_id: 2
        },
        {
          market_id: 2,
          seasonal_produce_id: 3
        },
        {
          market_id: 2,
          seasonal_produce_id: 90
        },
        {
          market_id: 2,
          seasonal_produce_id: 67
        },
        {
          market_id: 3,
          seasonal_produce_id: 23
        },
      ]);
    });
};
