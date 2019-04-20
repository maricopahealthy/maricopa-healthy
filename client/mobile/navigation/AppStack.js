import React from 'react';
import { createStackNavigator } from "react-navigation";
import { Header, Left, Right, Body, Icon, Text, Button } from 'native-base';
// screens
import HomeScreen from '../screens/HomeScreen'
import MarketsScreen from '../screens/Markets/MarketsScreen'
import RecipesScreen from '../screens/Recipes/RecipesScreen'
import ParksScreen from '../screens/Parks/ParksScreen'
import ActiveScreen from '../screens/Active/ActiveScreen'
import EventsScreen from '../screens/Events/EventsScreen'
import ResourcesScreen from '../screens/Resources/ResourcesScreen'
import SubscribeScreen from '../screens/Settings/SubscribeScreen'
import RecipesFilterScreen from "../screens/Recipes/RecipesFilterScreen";
import RecipesRecordScreen from "../screens/Recipes/RecipesRecordScreen";
/**
 * AppStack is a stackNavigator used for the primary application flow.
 * @type {NavigationContainer}
 */
const AppStack = createStackNavigator({
  Home: HomeScreen,
  Markets: MarketsScreen,
  // Recipes Group
  Recipes: RecipesScreen,
  RecipesFilter: {
    screen: RecipesFilterScreen,
    navigationOptions: {
      header: props => {
        return (
            <Header>
              <Left style={{ flexDirection: 'row' }}>
                <Button transparent>
                  <Icon name="ios-arrow-back" />
                </Button>
                <Button transparent>
                  <Icon name="ios-home" />
                </Button>
              </Left>
              <Body>
                <Text>Filter</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Reset</Text>
                </Button>
              </Right>
            </Header>
        )
      }
    }
  },
  RecipesRecord: {
    screen: RecipesRecordScreen,
    navigationOptions: {
      header: props => {
        return (
            <Header>
              <Left style={{ flexDirection: 'row' }}>
                <Button transparent>
                  <Icon name="ios-arrow-back" />
                </Button>
                <Button transparent>
                  <Icon name="ios-home" />
                </Button>
              </Left>
              <Body>
                <Text>Recipes</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="ios-options"/>
                </Button>
              </Right>
            </Header>
        )
      }
    }
  },

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

const CustomHeader = (props) => {
  return (
      <Header>
        <Left style={{ flexDirection: 'row' }}>
          <Button transparent>
            <Icon name="ios-arrow-back" />
          </Button>
          <Button transparent>
            <Icon name="ios-home" />
          </Button>
        </Left>
        <Body>
          <Text>Recipes</Text>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="ios-options"/>
          </Button>
        </Right>
      </Header>
  )
};