
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('active').del()
    .then(function () {
      // Inserts seed entries
      return knex("active").insert([
        { 
          thumbnail: "../../assets/thumbnails/active/active-ada-accessibility-icon.png", 
          name: "ADA Accessibility", 
          description: "Description and history of activity goes here followed by a map of parks where you can participate in the activity. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.", 
          rating: "4.2 stars",
          reviews: "37 reviews"
        },
        {
          thumbnail: "../../assets/thumbnails/active/active-archery-icon.png",
          name: "Archery",
          description: "Scelerisque viverra mauris in aliquam. Tincidunt arcu non sodales neque. Lectus mauris ultrices eros in cursus turpis massa. Scelerisque varius morbi enim nunc faucibus. Egestas sed tempus urna et pharetra pharetra. Purus sit amet volutpat consequat mauris.",
          rating: "4.2 stars",
          reviews: "37 reviews"
        },
        {
          thumbnail: "../../assets/thumbnails/active/active-baseball-icon.png",
          name: "Baseball",
          description: "Description and history of activity goes here followed by a map of parks where you can participate in the activity. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
          rating: "4.2 stars",
          reviews: "37 reviews"
        },
        {
          thumbnail: "../../assets/thumbnails/active/active-basketball-icon.png",
          name: "Basketball",
          description: "Scelerisque viverra mauris in aliquam. Tincidunt arcu non sodales neque. Lectus mauris ultrices eros in cursus turpis massa. Scelerisque varius morbi enim nunc faucibus. Egestas sed tempus urna et pharetra pharetra. Purus sit amet volutpat consequat mauris.",
          rating: "4.2 stars",
          reviews: "37 reviews"
        },
        {
          thumbnail: "../../assets/thumbnails/active/active-batting-cages-icon.png",
          name: "Batting Cages",
          description: "Description and history of activity goes here followed by a map of parks where you can participate in the activity. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
          rating: "4.2 stars",
          reviews: "37 reviews"
        },
      ]);
    });
};
