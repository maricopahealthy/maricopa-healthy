exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          thumbnail:
            "../assets/thumbnails/recipes/apple-pecan-bars.png",
          name: "Apple Pecan Bars",
          meal_type: "Dessert",
          ingredients:
            "1 medium spaghetti squash (about 2 1/2 pounds);1 tablespoon all-purpose flour;1 1/2 teaspoons olive oil;1/4 cup chopped sweet onion;1 tablespoon minced garlic;1 tablespoon Italian seasonings;1/8 teaspoon red pepper flakes;1/2 teaspoon kosher salt;1/8 teaspoon black pepper;1/2 cup Greek yogurt, non-fat;1/2 teaspoon sugar;1/3 cup shredded mozzarella cheese, part skim;1/2 cup diced tomatoes;1 tablespoon minced parsley",
          directions:
            "Wash hands with warm water and soap. Wash fresh vegetables before preparing.;Using a paring knife pierce 6-8 holes into the squash around the stem end. Place the whole squash in the microwave and cook for about 8 minutes or until skin slightly gives when squeezed. Allow to rest in microwave for about 5 minutes to continue steaming.;When squash is cool, slice in half lengthwise and gently scrape out the seeds and discard. Use a fork to scrape squash noodles into a large mixing bowl.;Add flour to squash and toss well.;Heat olive oil in large skillet over medium high heat.;Add onion, garlic, Italian seasoning, red pepper flakes, salt and pepper. Cook 1 minute stirring occasionally be careful and don’t let the garlic turn dark.;Add spaghetti squash, yogurt, sugar and cheese. Stir to combine and cook 2-3 minutes or until warmed through and fragrant.;Remove from heat and transfer to a serving dish. Garnish with diced tomatoes and parsley. Serve warm.",
          nutrition_facts:
            "Calories, 120; Carbohydrate, 17 gm; Protein, 7 gm; Total Fat, 4 gm; Saturated Fat, 1.5 gm; Trans Fat, 0 gm; Cholesterol, 5 mg; Fiber, 3 gm; Total Sugars, 7 gm; Sodium, 330 mg; Calcium, 132 mg; Folate, 25 mcg; Iron, 1 mg; Calories from Fat, 29%.",
          servings: "Makes 6 servings, 1 cup each.",
          attribution: "",
          featured: true,
          rating: "4.2 stars",
          reviews: "37 reviews"
        },
        {
          thumbnail:
            "../assets/thumbnails/recipes/apple-pecan-bars.png",
          name: "Banana Pops",
          meal_type: "Snacks",
          ingredients:
            "1 medium spaghetti squash (about 2 1/2 pounds);1 tablespoon all-purpose flour;1 1/2 teaspoons olive oil;1/4 cup chopped sweet onion;1 tablespoon minced garlic;1 tablespoon Italian seasonings;1/8 teaspoon red pepper flakes;1/2 teaspoon kosher salt;1/8 teaspoon black pepper;1/2 cup Greek yogurt, non-fat;1/2 teaspoon sugar;1/3 cup shredded mozzarella cheese, part skim;1/2 cup diced tomatoes;1 tablespoon minced parsley",
          directions:
            "Wash hands with warm water and soap. Wash fresh vegetables before preparing.;Using a paring knife pierce 6-8 holes into the squash around the stem end. Place the whole squash in the microwave and cook for about 8 minutes or until skin slightly gives when squeezed. Allow to rest in microwave for about 5 minutes to continue steaming.;When squash is cool, slice in half lengthwise and gently scrape out the seeds and discard. Use a fork to scrape squash noodles into a large mixing bowl.;Add flour to squash and toss well.;Heat olive oil in large skillet over medium high heat.;Add onion, garlic, Italian seasoning, red pepper flakes, salt and pepper. Cook 1 minute stirring occasionally be careful and don’t let the garlic turn dark.;Add spaghetti squash, yogurt, sugar and cheese. Stir to combine and cook 2-3 minutes or until warmed through and fragrant.;Remove from heat and transfer to a serving dish. Garnish with diced tomatoes and parsley. Serve warm.",
          nutrition_facts:
            "Calories, 120; Carbohydrate, 17 gm; Protein, 7 gm; Total Fat, 4 gm; Saturated Fat, 1.5 gm; Trans Fat, 0 gm; Cholesterol, 5 mg; Fiber, 3 gm; Total Sugars, 7 gm; Sodium, 330 mg; Calcium, 132 mg; Folate, 25 mcg; Iron, 1 mg; Calories from Fat, 29%.",
          servings: "Makes 4 servings.",
          attribution: "",
          featured: false,
          rating: "0 stars",
          reviews: "0 reviews"
        },
        {
          thumbnail:
            "../assets/thumbnails/recipes/apple-pecan-bars.png",
          name: "Black Beans with Corn and Tomatoes",
          meal_type: "Dinner",
          ingredients:
            "1 medium spaghetti squash (about 2 1/2 pounds);1 tablespoon all-purpose flour;1 1/2 teaspoons olive oil;1/4 cup chopped sweet onion;1 tablespoon minced garlic;1 tablespoon Italian seasonings;1/8 teaspoon red pepper flakes;1/2 teaspoon kosher salt;1/8 teaspoon black pepper;1/2 cup Greek yogurt, non-fat;1/2 teaspoon sugar;1/3 cup shredded mozzarella cheese, part skim;1/2 cup diced tomatoes;1 tablespoon minced parsley",
          directions:
            "Wash hands with warm water and soap. Wash fresh vegetables before preparing.;Using a paring knife pierce 6-8 holes into the squash around the stem end. Place the whole squash in the microwave and cook for about 8 minutes or until skin slightly gives when squeezed. Allow to rest in microwave for about 5 minutes to continue steaming.;When squash is cool, slice in half lengthwise and gently scrape out the seeds and discard. Use a fork to scrape squash noodles into a large mixing bowl.;Add flour to squash and toss well.;Heat olive oil in large skillet over medium high heat.;Add onion, garlic, Italian seasoning, red pepper flakes, salt and pepper. Cook 1 minute stirring occasionally be careful and don’t let the garlic turn dark.;Add spaghetti squash, yogurt, sugar and cheese. Stir to combine and cook 2-3 minutes or until warmed through and fragrant.;Remove from heat and transfer to a serving dish. Garnish with diced tomatoes and parsley. Serve warm.",
          nutrition_facts:
            "Calories, 120; Carbohydrate, 17 gm; Protein, 7 gm; Total Fat, 4 gm; Saturated Fat, 1.5 gm; Trans Fat, 0 gm; Cholesterol, 5 mg; Fiber, 3 gm; Total Sugars, 7 gm; Sodium, 330 mg; Calcium, 132 mg; Folate, 25 mcg; Iron, 1 mg; Calories from Fat, 29%.",
          servings: "Makes 6 servings.",
          attribution: "",
          featured: true,
          rating: "4.3 stars",
          reviews: "10 reviews"
        },
        {
          thumbnail:
            "../assets/thumbnails/recipes/apple-pecan-bars.png",
          name: "Cheesy Spaghetti Squash",
          meal_type: "Dinner",
          ingredients:
            "1 medium spaghetti squash (about 2 1/2 pounds);1 tablespoon all-purpose flour;1 1/2 teaspoons olive oil;1/4 cup chopped sweet onion;1 tablespoon minced garlic;1 tablespoon Italian seasonings;1/8 teaspoon red pepper flakes;1/2 teaspoon kosher salt;1/8 teaspoon black pepper;1/2 cup Greek yogurt, non-fat;1/2 teaspoon sugar;1/3 cup shredded mozzarella cheese, part skim;1/2 cup diced tomatoes;1 tablespoon minced parsley",
          directions:
            "Wash hands with warm water and soap. Wash fresh vegetables before preparing.;Using a paring knife pierce 6-8 holes into the squash around the stem end. Place the whole squash in the microwave and cook for about 8 minutes or until skin slightly gives when squeezed. Allow to rest in microwave for about 5 minutes to continue steaming.;When squash is cool, slice in half lengthwise and gently scrape out the seeds and discard. Use a fork to scrape squash noodles into a large mixing bowl.;Add flour to squash and toss well.;Heat olive oil in large skillet over medium high heat.;Add onion, garlic, Italian seasoning, red pepper flakes, salt and pepper. Cook 1 minute stirring occasionally be careful and don’t let the garlic turn dark.;Add spaghetti squash, yogurt, sugar and cheese. Stir to combine and cook 2-3 minutes or until warmed through and fragrant.;Remove from heat and transfer to a serving dish. Garnish with diced tomatoes and parsley. Serve warm.",
          nutrition_facts:
            "Calories, 120; Carbohydrate, 17 gm; Protein, 7 gm; Total Fat, 4 gm; Saturated Fat, 1.5 gm; Trans Fat, 0 gm; Cholesterol, 5 mg; Fiber, 3 gm; Total Sugars, 7 gm; Sodium, 330 mg; Calcium, 132 mg; Folate, 25 mcg; Iron, 1 mg; Calories from Fat, 29%.",
          servings: "Makes 4 servings, 1 cup each.",
          attribution: "",
          featured: false,
          rating: "4 stars",
          reviews: "37 reviews"
        },
        {
          thumbnail:
            "../assets/thumbnails/recipes/apple-pecan-bars.png",
          name: "Chipotle Apple Slaw",
          meal_type: "Lunch",
          ingredients:
            "1 medium spaghetti squash (about 2 1/2 pounds);1 tablespoon all-purpose flour;1 1/2 teaspoons olive oil;1/4 cup chopped sweet onion;1 tablespoon minced garlic;1 tablespoon Italian seasonings;1/8 teaspoon red pepper flakes;1/2 teaspoon kosher salt;1/8 teaspoon black pepper;1/2 cup Greek yogurt, non-fat;1/2 teaspoon sugar;1/3 cup shredded mozzarella cheese, part skim;1/2 cup diced tomatoes;1 tablespoon minced parsley",
          directions:
            "Wash hands with warm water and soap. Wash fresh vegetables before preparing.;Using a paring knife pierce 6-8 holes into the squash around the stem end. Place the whole squash in the microwave and cook for about 8 minutes or until skin slightly gives when squeezed. Allow to rest in microwave for about 5 minutes to continue steaming.;When squash is cool, slice in half lengthwise and gently scrape out the seeds and discard. Use a fork to scrape squash noodles into a large mixing bowl.;Add flour to squash and toss well.;Heat olive oil in large skillet over medium high heat.;Add onion, garlic, Italian seasoning, red pepper flakes, salt and pepper. Cook 1 minute stirring occasionally be careful and don’t let the garlic turn dark.;Add spaghetti squash, yogurt, sugar and cheese. Stir to combine and cook 2-3 minutes or until warmed through and fragrant.;Remove from heat and transfer to a serving dish. Garnish with diced tomatoes and parsley. Serve warm.",
          nutrition_facts:
            "Calories, 120; Carbohydrate, 17 gm; Protein, 7 gm; Total Fat, 4 gm; Saturated Fat, 1.5 gm; Trans Fat, 0 gm; Cholesterol, 5 mg; Fiber, 3 gm; Total Sugars, 7 gm; Sodium, 330 mg; Calcium, 132 mg; Folate, 25 mcg; Iron, 1 mg; Calories from Fat, 29%.",
          servings: "Makes 4 servings, 1 cup each.",
          attribution: "",
          featured: false,
          rating: "4.5 stars",
          reviews: "25 reviews"
        },
        {
          thumbnail:
            "../assets/thumbnails/recipes/apple-pecan-bars.png",
          name: "Chorizo Slaw Tacos",
          meal_type: "Dinner",
          ingredients:
            "1 medium spaghetti squash (about 2 1/2 pounds);1 tablespoon all-purpose flour;1 1/2 teaspoons olive oil;1/4 cup chopped sweet onion;1 tablespoon minced garlic;1 tablespoon Italian seasonings;1/8 teaspoon red pepper flakes;1/2 teaspoon kosher salt;1/8 teaspoon black pepper;1/2 cup Greek yogurt, non-fat;1/2 teaspoon sugar;1/3 cup shredded mozzarella cheese, part skim;1/2 cup diced tomatoes;1 tablespoon minced parsley",
          directions:
            "Wash hands with warm water and soap. Wash fresh vegetables before preparing.;Using a paring knife pierce 6-8 holes into the squash around the stem end. Place the whole squash in the microwave and cook for about 8 minutes or until skin slightly gives when squeezed. Allow to rest in microwave for about 5 minutes to continue steaming.;When squash is cool, slice in half lengthwise and gently scrape out the seeds and discard. Use a fork to scrape squash noodles into a large mixing bowl.;Add flour to squash and toss well.;Heat olive oil in large skillet over medium high heat.;Add onion, garlic, Italian seasoning, red pepper flakes, salt and pepper. Cook 1 minute stirring occasionally be careful and don’t let the garlic turn dark.;Add spaghetti squash, yogurt, sugar and cheese. Stir to combine and cook 2-3 minutes or until warmed through and fragrant.;Remove from heat and transfer to a serving dish. Garnish with diced tomatoes and parsley. Serve warm.",
          nutrition_facts:
            "Calories, 120; Carbohydrate, 17 gm; Protein, 7 gm; Total Fat, 4 gm; Saturated Fat, 1.5 gm; Trans Fat, 0 gm; Cholesterol, 5 mg; Fiber, 3 gm; Total Sugars, 7 gm; Sodium, 330 mg; Calcium, 132 mg; Folate, 25 mcg; Iron, 1 mg; Calories from Fat, 29%.",
          servings: "Makes 4 servings, 1 cup each.",
          attribution: "",
          featured: false,
          rating: "0 stars",
          reviews: "0 reviews"
        },
        {
          thumbnail:
            "../assets/thumbnails/recipes/apple-pecan-bars.png",
          name: "Citrus Kohlrabi Salad",
          meal_type: "Lunch",
          ingredients:
            "1 medium spaghetti squash (about 2 1/2 pounds);1 tablespoon all-purpose flour;1 1/2 teaspoons olive oil;1/4 cup chopped sweet onion;1 tablespoon minced garlic;1 tablespoon Italian seasonings;1/8 teaspoon red pepper flakes;1/2 teaspoon kosher salt;1/8 teaspoon black pepper;1/2 cup Greek yogurt, non-fat;1/2 teaspoon sugar;1/3 cup shredded mozzarella cheese, part skim;1/2 cup diced tomatoes;1 tablespoon minced parsley",
          directions:
            "Wash hands with warm water and soap. Wash fresh vegetables before preparing.;Using a paring knife pierce 6-8 holes into the squash around the stem end. Place the whole squash in the microwave and cook for about 8 minutes or until skin slightly gives when squeezed. Allow to rest in microwave for about 5 minutes to continue steaming.;When squash is cool, slice in half lengthwise and gently scrape out the seeds and discard. Use a fork to scrape squash noodles into a large mixing bowl.;Add flour to squash and toss well.;Heat olive oil in large skillet over medium high heat.;Add onion, garlic, Italian seasoning, red pepper flakes, salt and pepper. Cook 1 minute stirring occasionally be careful and don’t let the garlic turn dark.;Add spaghetti squash, yogurt, sugar and cheese. Stir to combine and cook 2-3 minutes or until warmed through and fragrant.;Remove from heat and transfer to a serving dish. Garnish with diced tomatoes and parsley. Serve warm.",
          nutrition_facts:
            "Calories, 120; Carbohydrate, 17 gm; Protein, 7 gm; Total Fat, 4 gm; Saturated Fat, 1.5 gm; Trans Fat, 0 gm; Cholesterol, 5 mg; Fiber, 3 gm; Total Sugars, 7 gm; Sodium, 330 mg; Calcium, 132 mg; Folate, 25 mcg; Iron, 1 mg; Calories from Fat, 29%.",
          servings: "Makes 6 servings.",
          attribution: "",
          featured: true,
          rating: "0 stars",
          reviews: "0 reviews"
        },
        {
          thumbnail:
            "../assets/thumbnails/recipes/apple-pecan-bars.png",
          name: "Fruit and cheese Wands",
          meal_type: "Snacks",
          ingredients:
            "1 medium spaghetti squash (about 2 1/2 pounds);1 tablespoon all-purpose flour;1 1/2 teaspoons olive oil;1/4 cup chopped sweet onion;1 tablespoon minced garlic;1 tablespoon Italian seasonings;1/8 teaspoon red pepper flakes;1/2 teaspoon kosher salt;1/8 teaspoon black pepper;1/2 cup Greek yogurt, non-fat;1/2 teaspoon sugar;1/3 cup shredded mozzarella cheese, part skim;1/2 cup diced tomatoes;1 tablespoon minced parsley",
          directions:
            "Wash hands with warm water and soap. Wash fresh vegetables before preparing.;Using a paring knife pierce 6-8 holes into the squash around the stem end. Place the whole squash in the microwave and cook for about 8 minutes or until skin slightly gives when squeezed. Allow to rest in microwave for about 5 minutes to continue steaming.;When squash is cool, slice in half lengthwise and gently scrape out the seeds and discard. Use a fork to scrape squash noodles into a large mixing bowl.;Add flour to squash and toss well.;Heat olive oil in large skillet over medium high heat.;Add onion, garlic, Italian seasoning, red pepper flakes, salt and pepper. Cook 1 minute stirring occasionally be careful and don’t let the garlic turn dark.;Add spaghetti squash, yogurt, sugar and cheese. Stir to combine and cook 2-3 minutes or until warmed through and fragrant.;Remove from heat and transfer to a serving dish. Garnish with diced tomatoes and parsley. Serve warm.",
          nutrition_facts:
            "Calories, 120; Carbohydrate, 17 gm; Protein, 7 gm; Total Fat, 4 gm; Saturated Fat, 1.5 gm; Trans Fat, 0 gm; Cholesterol, 5 mg; Fiber, 3 gm; Total Sugars, 7 gm; Sodium, 330 mg; Calcium, 132 mg; Folate, 25 mcg; Iron, 1 mg; Calories from Fat, 29%.",
          servings: "Makes 8 servings, 1 cup each.",
          attribution: "",
          featured: false,
          rating: "0 stars",
          reviews: "0 reviews"
        },
        {
          thumbnail:
            "../assets/thumbnails/recipes/apple-pecan-bars.png",
          name: "Grapefruit Avocado Salad",
          meal_type: "Breakfast",
          ingredients:
            "1 medium spaghetti squash (about 2 1/2 pounds);1 tablespoon all-purpose flour;1 1/2 teaspoons olive oil;1/4 cup chopped sweet onion;1 tablespoon minced garlic;1 tablespoon Italian seasonings;1/8 teaspoon red pepper flakes;1/2 teaspoon kosher salt;1/8 teaspoon black pepper;1/2 cup Greek yogurt, non-fat;1/2 teaspoon sugar;1/3 cup shredded mozzarella cheese, part skim;1/2 cup diced tomatoes;1 tablespoon minced parsley",
          directions:
            "Wash hands with warm water and soap. Wash fresh vegetables before preparing.;Using a paring knife pierce 6-8 holes into the squash around the stem end. Place the whole squash in the microwave and cook for about 8 minutes or until skin slightly gives when squeezed. Allow to rest in microwave for about 5 minutes to continue steaming.;When squash is cool, slice in half lengthwise and gently scrape out the seeds and discard. Use a fork to scrape squash noodles into a large mixing bowl.;Add flour to squash and toss well.;Heat olive oil in large skillet over medium high heat.;Add onion, garlic, Italian seasoning, red pepper flakes, salt and pepper. Cook 1 minute stirring occasionally be careful and don’t let the garlic turn dark.;Add spaghetti squash, yogurt, sugar and cheese. Stir to combine and cook 2-3 minutes or until warmed through and fragrant.;Remove from heat and transfer to a serving dish. Garnish with diced tomatoes and parsley. Serve warm.",
          nutrition_facts:
            "Calories, 120; Carbohydrate, 17 gm; Protein, 7 gm; Total Fat, 4 gm; Saturated Fat, 1.5 gm; Trans Fat, 0 gm; Cholesterol, 5 mg; Fiber, 3 gm; Total Sugars, 7 gm; Sodium, 330 mg; Calcium, 132 mg; Folate, 25 mcg; Iron, 1 mg; Calories from Fat, 29%.",
          servings: "Makes 4 servings, 1 cup each.",
          attribution: "",
          featured: false,
          rating: "0 stars",
          reviews: "0 reviews"
        },
        {
          thumbnail:
            "../assets/thumbnails/recipes/apple-pecan-bars.png",
          name: "Orange Glazed Radishes and Spinach",
          meal_type: "Drinks",
          ingredients:
            "1 medium spaghetti squash (about 2 1/2 pounds);1 tablespoon all-purpose flour;1 1/2 teaspoons olive oil;1/4 cup chopped sweet onion;1 tablespoon minced garlic;1 tablespoon Italian seasonings;1/8 teaspoon red pepper flakes;1/2 teaspoon kosher salt;1/8 teaspoon black pepper;1/2 cup Greek yogurt, non-fat;1/2 teaspoon sugar;1/3 cup shredded mozzarella cheese, part skim;1/2 cup diced tomatoes;1 tablespoon minced parsley",
          directions:
            "Wash hands with warm water and soap. Wash fresh vegetables before preparing.;Using a paring knife pierce 6-8 holes into the squash around the stem end. Place the whole squash in the microwave and cook for about 8 minutes or until skin slightly gives when squeezed. Allow to rest in microwave for about 5 minutes to continue steaming.;When squash is cool, slice in half lengthwise and gently scrape out the seeds and discard. Use a fork to scrape squash noodles into a large mixing bowl.;Add flour to squash and toss well.;Heat olive oil in large skillet over medium high heat.;Add onion, garlic, Italian seasoning, red pepper flakes, salt and pepper. Cook 1 minute stirring occasionally be careful and don’t let the garlic turn dark.;Add spaghetti squash, yogurt, sugar and cheese. Stir to combine and cook 2-3 minutes or until warmed through and fragrant.;Remove from heat and transfer to a serving dish. Garnish with diced tomatoes and parsley. Serve warm.",
          nutrition_facts:
            "Calories, 120; Carbohydrate, 17 gm; Protein, 7 gm; Total Fat, 4 gm; Saturated Fat, 1.5 gm; Trans Fat, 0 gm; Cholesterol, 5 mg; Fiber, 3 gm; Total Sugars, 7 gm; Sodium, 330 mg; Calcium, 132 mg; Folate, 25 mcg; Iron, 1 mg; Calories from Fat, 29%.",
          servings: "",
          attribution: "",
          featured: true,
          rating: "0 stars",
          reviews: "0 reviews"
        }
      ]);
    });
};
