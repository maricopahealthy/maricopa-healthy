exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          thumbnail: "",
          name: "",
          meal_type: "",
          ingredients: "",
          directions: "",
          nutrition_facts: "",
          servings: "",
          attribution: "",
          featured: "",
          rating: ""
        }
      ]);
    });
};
