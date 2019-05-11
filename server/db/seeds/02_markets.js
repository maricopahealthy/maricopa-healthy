
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('markets').del()
    .then(function () {
      // Inserts seed entries
      return knex('markets').insert([
        { name: "", street_address: "", city: "", state: "", zipcode: "", phone_number: "", website_url: "", hours: "", produce: "", payment_methods: "", rating: "" }
      ]);
    });
};
