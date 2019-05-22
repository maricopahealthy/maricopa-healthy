exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("seasonal_produce")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("seasonal_produce").insert([
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Artichokes"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Asparagus"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Beets"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Bok Choy"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Broccoli"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Brussels Sprouts"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: " Cabbage"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Carrots"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Cauliflower"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Celery"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Chard"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Cucumbers"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Eggplant"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Grapefruit"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Green Onions"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Greens"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Kale"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Kohlrabi"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Leeks"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Lettuce"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Onions"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Oranges"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Parsnips"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Radishes"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Spinach"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Strawberries"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Summer Squash"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Tomatoes"
        },
        {
          season: "Spring",
          start_month: "March",
          end_month: "May",
          name: "Turnips"
        }
      ]);
    });
};
