import React from 'react';
import { createStackNavigator } from "react-navigation";
// screens
import HomeScreen from '../screens/HomeScreen'
//Markets
import MarketsScreen from '../screens/Markets/MarketsScreen'
import MarketsListScreen from '../screens/Markets/MarketsListScreen';
import MarketsMapScreen from '../screens/Markets/MarketsMapScreen';
import MarketsFilterScreen from '../screens/Markets/MarketsFilterScreen';
import MarketsLearnMoreScreen from '../screens/Markets/MarketsLearnMoreScreen';


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
  //Markets
  Markets: MarketsScreen,
  MarketsList: MarketsListScreen,
  MarketsMap: MarketsMapScreen,
  MarketsFilter: MarketsFilterScreen,
  MarketsLearnMore: MarketsLearnMoreScreen,

  Recipes: RecipesScreen,
  Parks: ParksScreen,
  Active: ActiveScreen,
  Events: EventsScreen,
  Resources: ResourcesScreen,
  Subscribe: SubscribeScreen,
});

export default AppStack;