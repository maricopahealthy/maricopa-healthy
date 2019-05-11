
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex("events").insert([
        {
          thumbnail: "",
          name: "",
          location: "",
          address: "",
          city: "",
          state: "",
          zipcode: "",
          state_date: "",
          end_date: "",
          start_time: "",
          end_time: "",
          recurring: "",
          frequency: "",
          cost: "",
          ages: "",
          description: "",
          phone: "",
          website: ""
        },
        {
          thumbnail: "",
          name: "",
          location: "",
          address: "",
          city: "",
          state: "",
          zipcode: "",
          state_date: "",
          end_date: "",
          start_time: "",
          end_time: "",
          recurring: "",
          frequency: "",
          cost: "",
          ages: "",
          description: "",
          phone: "",
          website: ""
        },
        {
          thumbnail: "",
          name: "",
          location: "",
          address: "",
          city: "",
          state: "",
          zipcode: "",
          state_date: "",
          end_date: "",
          start_time: "",
          end_time: "",
          recurring: "",
          frequency: "",
          cost: "",
          ages: "",
          description: "",
          phone: "",
          website: ""
        },
        {
          thumbnail: "",
          name: "",
          location: "",
          address: "",
          city: "",
          state: "",
          zipcode: "",
          state_date: "",
          end_date: "",
          start_time: "",
          end_time: "",
          recurring: "",
          frequency: "",
          cost: "",
          ages: "",
          description: "",
          phone: "",
          website: ""
        }
      ]);
    });
};
