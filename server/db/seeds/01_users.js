
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          username: "marcusa",
          email: "marcusames@email.com", 
          zipcode: "85001" 
        },
        {
          username: "oscars",
          email: "oscars@email.com",
          zipcode: "85004"
        },
        {
          username: "jenn",
          email: "jenn@email.com",
          zipcode: "85004"
        }
      ]);
    });
};
