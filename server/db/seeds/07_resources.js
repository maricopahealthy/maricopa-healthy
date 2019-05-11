
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          thumbnail: "",
          name: "",
          teaser: "",
          phone_number: "",
          website: "",
          description: ""
        },
        {
          thumbnail: "",
          name: "",
          teaser: "",
          phone_number: "",
          website: "",
          description: ""
        },
        {
          thumbnail: "",
          name: "",
          teaser: "",
          phone_number: "",
          website: "",
          description: ""
        },
        {
          thumbnail: "",
          name: "",
          teaser: "",
          phone_number: "",
          website: "",
          description: ""
        }
      ]);
    });
};
