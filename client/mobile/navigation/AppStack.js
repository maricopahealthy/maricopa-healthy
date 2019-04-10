import React from 'react';
import { createStackNavigator } from "react-navigation";
// screens
import HomeScreen from '../screens/HomeScreen'
import MarketsScreen from '../screens/Markets/MarketsScreen'
import RecipesScreen from '../screens/Recipes/RecipesScreen'
import ParksScreen from '../screens/Parks/ParksScreen'
import ActiveScreen from '../screens/Active/ActiveScreen'
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
  Recipes: RecipesScreen,
  Parks: ParksScreen,
  Active: ActiveScreen,
  Events: EventsScreen,
  Resources: ResourcesScreen,
  Subscribe: SubscribeScreen,
});

export default AppStack;