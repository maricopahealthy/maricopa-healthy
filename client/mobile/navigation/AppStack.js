import React from 'react';
import { createStackNavigator } from "react-navigation";
import { Header, Left, Right, Body, Icon, Text, Button } from 'native-base';
// screens
import HomeGroup from './navigation-groups/HomeGroup'
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
import ResourceGroup from './navigation-groups/ResourceGroup'
// Subscribe Screen Group
import SubscribeScreen from '../screens/Settings/SubscribeScreen'
// Settings Screen Group
import SettingsGroup from './navigation-groups/SettingsGroup'

/**
 * AppStack is a stackNavigator used for the primary application flow.
 * @type {NavigationContainer}
 */
const AppStack = createStackNavigator({

  //Home
  Home: HomeGroup.Home,
  Search: HomeGroup.Search,

  //Markets
  Markets: MarketsGroup.Markets,
  MarketsList: MarketsGroup.MarketsList,
  MarketsMap: MarketsMapScreen,
  MarketsFilter: MarketsGroup.MarketsFilter,
  MarketsLearnMore: MarketsLearnMoreScreen,

  // Recipes Group
  RecipesList: RecipeGroup.RecipesList,
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
  EventsList: EventGroup.EventsList,
  EventsFilter: EventGroup.EventsFilter,
  EventsRecord: EventGroup.EventsRecord,

  // Resources Group
  ResourcesList: ResourceGroup.ResourcesList,
  ResourcesRecord: ResourceGroup.ResourcesRecord,

  // Subscription Group
  Subscribe: SubscribeScreen,

  //Settings Group
  Settings: SettingsGroup.Settings,
  Profile: SettingsGroup.Profile,
  EditProfile: SettingsGroup.EditProfile,
  Contact: SettingsGroup.Contact,
  About: SettingsGroup.About,
  Favorites: SettingsGroup.Favorites,
  Meetup: SettingsGroup.Meetup,
  Notifications: SettingsGroup.Notifications,
  PrivacyPolicy: SettingsGroup.PrivacyPolicy,
  TermsOfService: SettingsGroup.TermsOfService,
  Subscribe: SettingsGroup.Subscribe,
  SubscribeRecipes: SettingsGroup.SubscribeRecipes
});

export default AppStack;