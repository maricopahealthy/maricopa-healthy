
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('active').del()
    .then(function () {
      // Inserts seed entries
      return knex("active").insert([
        { thumbnail: "", name: "", description: "", rating: "" },
        { thumbnail: "", name: "", description: "", rating: "" },
        { thumbnail: "", name: "", description: "", rating: "" },
      ]);
    });
};
