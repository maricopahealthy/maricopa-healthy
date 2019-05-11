
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parks').del()
    .then(function () {
      // Inserts seed entries
      return knex("parks").insert([
        {
          thumbnail: "",
          name: "",
          street_address: "",
          city: "",
          state: "",
          zipcode: "",
          phone: "",
          website: "",
          hours: "",
          features: "",
          ratings: ""
        },
        {
          thumbnail: "",
          name: "",
          street_address: "",
          city: "",
          state: "",
          zipcode: "",
          phone: "",
          website: "",
          hours: "",
          features: "",
          ratings: ""
        },
        {
          thumbnail: "",
          name: "",
          street_address: "",
          city: "",
          state: "",
          zipcode: "",
          phone: "",
          website: "",
          hours: "",
          features: "",
          ratings: ""
        },
      ]);
    });
};
