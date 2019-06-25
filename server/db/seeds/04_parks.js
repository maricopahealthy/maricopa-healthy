
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parks').del()
    .then(function () {
      // Inserts seed entries
      return knex("parks").insert([
        {
          thumbnail: "../../assets/thumbnails/parks/parks-thumb-placeholder-01.png",
          name: "Cesar Chavez Park",
          street_address: "7858 S. 35th Ave",
          city: "Laveen Village",
          state: "AZ",
          zipcode: "85339",
          phone: "555-555-5555",
          website: "https://placeholder.com/",
          rating: "4.2 stars",
          reviews: "37 reviews"
        },
        {
          thumbnail: "../../assets/thumbnails/parks/parks-thumb-placeholder-02.png",
          name: "Discovery District Park",
          street_address: "2214 E. Pecos Rd",
          city: "Chandler",
          state: "AZ",
          zipcode: "85225",
          phone: "111-111-1111",
          website: "https://placeholder.com/",
          rating: "3.6 stars",
          reviews: "16 reviews"
        },
        {
          thumbnail: "../../assets/thumbnails/parks/parks-thumb-placeholder-03.png",
          name: "Lake Pleasant Regional Park",
          street_address: "41835 N. Castle Hot Springs Rd",
          city: "Morristown",
          state: "AZ",
          zipcode: "85342",
          phone: "222-222-2222",
          website: "https://placeholder.com/",
          rating: "4.2 stars",
          reviews: "37 reviews"
        },
        {
          thumbnail: "../../assets/thumbnails/parks/parks-thumb-placeholder-01.png",
          name: "Adobe Mountain Park",
          street_address: "3410 W Crest Ln",
          city: "Phoenix",
          state: "AZ",
          zipcode: "85027",
          phone: "222-222-2222",
          website: "https://placeholder.com",
          rating: "3.4 stars",
          reviews: "13 reviews"
        },
        {
          thumbnail: "../../assets/thumbnails/parks/parks-thumb-placeholder-02.png",
          name: "Clarence B. Hayes Memorial Park",
          street_address: "9845 75th Ave",
          city: "Peoria",
          state: "AZ",
          zipcode: "85345",
          phone: "222-222-2222",
          website: "https://placeholder.com",
          rating: "0 stars",
          reviews: "0 reviews"
        }
      ]);
    });
};
