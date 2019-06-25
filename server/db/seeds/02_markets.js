
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('markets').del()
    .then(function () {
      // Inserts seed entries
      return knex('markets').insert([
        { 
          name: "Avondale Care1st Resource Center Farmers Market", 
          thumbnail: "../../assets/thumbnails/markets/markets-thumb-placeholder-01.png",
          street_address: "16838 E Ave of the Fountains", 
          city: "Fountain Hills", 
          state: "AZ", 
          zipcode: "85268", 
          phone_number: "555-555-5555", 
          website_url: "https://placeholder.com/", 
          payment_methods: "Cash, Check, Visa", 
          rating: "4.2 stars",
          reviews: "37 reviews"
        },
        {
          name: "Our Harvest/Nuestra Cosec",
          thumbnail: "../../assets/thumbnails/markets/markets-thumb-placeholder-02.png",
          street_address: "3806 N. Brown Rd",
          city: "Scottsdale",
          state: "AZ",
          zipcode: "85251",
          phone_number: "111-111-1111",
          website_url: "https://placeholder.com/",
          payment_methods: "Mastercard, American Express, SNAP",
          rating: "3.6 stars",
          reviews: "16 reviews"
        },
        {
          name: "Anthem Farmers Market",
          thumbnail: "../../assets/thumbnails/markets/markets-thumb-placeholder-03.png",
          street_address: "41703 N. Gavilan Peak Pkwy",
          city: "Anthem",
          state: "AZ",
          zipcode: "85086",
          phone_number: "222-222-2222",
          website_url: "https://placeholder.com/",
          payment_methods: "WIC, FMNP, Double Up Food Bucks",
          rating: "4.2 stars",
          reviews: "37 reviews"
        },
        {
          name: "Uptown Farmers Market",
          thumbnail: "../../assets/thumbnails/markets/markets-thumb-placeholder-01.png",
          street_address: "575 N Central Av",
          city: "Phoenix",
          state: "AZ",
          zipcode: "85012",
          phone_number: "602-859-5648",
          website_url: "https://placeholder.com",
          payment_methods: "Cash, Credit, SNAP, SNAP Matching, FMNP",
          rating: "3.4 stars",
          reviews: "26 Reviews"
        },
        {
          name: "Sun City Farmers Market",
          thumbnail: "../../assets/thumbnails/markets/markets-thumb-placeholder-02.png",
          street_address: "16820 N99th Ave",
          city: "Sun City",
          state: "AZ",
          zipcode: "85351",
          phone_number: "623-848-1234",
          website_url: "https://placeholder.com",
          payment_methods: "Cash, Credit, SNAP, FMNP",
          rating: "4.3 Stars",
          reviews: "34 Reviews"
        },
      ]);
    });
};