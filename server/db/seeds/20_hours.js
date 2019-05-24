
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hours').del()
    .then(function () {
      // Inserts seed entries
      return knex('hours').insert([
        {
          market_id: 1,
          header: "Wednesday",
          body: "May - June: 8:00 am - 12:00 pm October - April: 8:00 am - 12:00 pm"
        },
        {
          market_id: 1,
          header: "Saturday",
          body: "May - September: 8:00 am - 12:00 pm October - April: 9:00 am - 1:00 pm"
        },
        {
          market_id: 2,
          header: "Saturday",
          body: "May - September: 8:00 am - 12:00 pm October - April: 9:00 am - 1:00 pm"
        },
        {
          market_id: 3,
          header: "Saturday",
          body: "May - September: 8:00 am - 12:00 pm October - April: 9:00 am - 1:00 pm"
        },
      ]);
    });
};
