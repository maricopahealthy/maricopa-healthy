import React from 'react';
import { createStackNavigator } from "react-navigation";
import { Header, Left, Right, Body, Icon, Text, Button } from 'native-base';
// screens
import HomeScreen from '../screens/HomeScreen'
//Markets Screen Group
import MarketsGroup from './navigation-groups/MarketsGroup'
import MarketsMapScreen from '../screens/Markets/MarketsMapScreen';
import MarketsLearnMoreScreen from '../screens/Markets/MarketsLearnMoreScreen';

// Recipe Screen Group
import RecipeGroup from './navigation-groups/RecipeGroup'
// Parks Screen Group
import ParksGroup from './navigation-groups/ParksGroup'
// Active Screen Group
import ActiveGroup from './navigation-groups/ActiveGroup'
// Events Screen Group
import EventGroup from './navigation-groups/EventGroup'
// Resource Screen Group
import ResourcesScreen from '../screens/Resources/ResourcesScreen'
// Subscribe Screen Group
import SubscribeScreen from '../screens/Settings/SubscribeScreen'

/**
 * AppStack is a stackNavigator used for the primary application flow.
 * @type {NavigationContainer}
 */
const AppStack = createStackNavigator({
  Home: HomeScreen,
  //Markets
  Markets: MarketsGroup.Markets,
  MarketsList: MarketsGroup.MarketsList,
  MarketsMap: MarketsMapScreen,
  MarketsFilter: MarketsGroup.MarketsFilter,
  MarketsLearnMore: MarketsLearnMoreScreen,
  // Recipes Group
  Recipes: RecipeGroup.Recipes,
  RecipesFilter: RecipeGroup.RecipesFilter,
  RecipesRecord: RecipeGroup.RecipesRecord,

  // Parks Group
  Parks: ParksGroup.Parks,
  ParksList: ParksGroup.ParksList,
  ParksFilter: ParksGroup.ParksFilter,

  // Activities Group
  Active: ActiveGroup.Active,
  ActiveList: ActiveGroup.ActiveList,
  ActiveFilter: ActiveGroup.ActiveFilter,

  // Events Group
  Events: EventGroup.Events,
  EventsFilter: EventGroup.EventsFilter,
  EventsRecord: EventGroup.EventsRecord,

  // Resources Group
  Resources: ResourcesScreen,

  // Subscription Group
  Subscribe: SubscribeScreen,
});

export default AppStack;