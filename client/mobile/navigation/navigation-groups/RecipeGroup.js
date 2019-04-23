import React from 'react'
import RecipesListScreen from "../../screens/Recipes/RecipesListScreen";
import RecipesFilterScreen from "../../screens/Recipes/RecipesFilterScreen";
import RecipesRecordScreen from "../../screens/Recipes/RecipesRecordScreen";

import NavigationalHeaderHome from "../../components/navigation-headers/NavigationalHeaderHome";
import NavigationalHeaderFilter from "../../components/navigation-headers/NavigationalHeaderFilter";
import NavigationalHeaderRecord from "../../components/navigation-headers/NavigationalHeaderRecord";

export default {

  RecipesList: {
    screen: RecipesListScreen,
    navigationOptions: {
      header: <NavigationalHeaderHome title="Recipes" filterScreenRoute="RecipesFilter" />
    }
  },

  RecipesFilter: {
    screen: RecipesFilterScreen,
    navigationOptions: {
      header: <NavigationalHeaderFilter />
    }
  },

  RecipesRecord: {
    screen: RecipesRecordScreen,
    navigationOptions: {
      header: <NavigationalHeaderRecord />
    }
  },

}