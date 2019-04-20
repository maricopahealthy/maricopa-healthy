import React from 'react';
import { createStackNavigator } from "react-navigation";
import { Header, Left, Right, Body, Icon, Text, Button } from 'native-base';
// screens
import HomeScreen from '../screens/HomeScreen'
import MarketsScreen from '../screens/Markets/MarketsScreen'
// Recipe Screen Group
// import RecipesScreen from '../screens/Recipes/RecipesScreen'
// import RecipesFilterScreen from "../screens/Recipes/RecipesFilterScreen";
// import RecipesRecordScreen from "../screens/Recipes/RecipesRecordScreen";
import RecipeGroup from './navigation-groups/RecipeGroup'
// Parks Screen Group
import ParksScreen from '../screens/Parks/ParksScreen'
// Active Screen Group
import ActiveScreen from '../screens/Active/ActiveScreen'
// Events Screen Group
import EventsScreen from '../screens/Events/EventsScreen'
import ResourcesScreen from '../screens/Resources/ResourcesScreen'
import SubscribeScreen from '../screens/Settings/SubscribeScreen'

/**
 * AppStack is a stackNavigator used for the primary application flow.
 * @type {NavigationContainer}
 */
const AppStack = createStackNavigator({
  Home: HomeScreen,
  Markets: MarketsScreen,
  // Recipes Group
  Recipes: RecipeGroup.Recipes,
  RecipesFilter: RecipeGroup.RecipesFilter,
  RecipesRecord: RecipeGroup.RecipesRecord,

  // Parks Group
  Parks: ParksScreen,

  // Activities Group
  Active: ActiveScreen,

  // Events Group
  Events: EventsScreen,

  // Resources Group
  Resources: ResourcesScreen,

  // Subscription Group
  Subscribe: SubscribeScreen,
});

export default AppStack;