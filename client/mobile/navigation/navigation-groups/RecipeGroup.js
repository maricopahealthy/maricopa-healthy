import React from 'react'
import RecipesScreen from "../../screens/Recipes/RecipesScreen";
import RecipesFilterScreen from "../../screens/Recipes/RecipesFilterScreen";
import {Body, Button, Header, Icon, Left, Right, Text} from "native-base";
import RecipesRecordScreen from "../../screens/Recipes/RecipesRecordScreen";

export default {

  Recipes: {
    screen: RecipesScreen,
  },

  RecipesFilter: {
    screen: RecipesFilterScreen,
    navigationOptions: {
      header: ({ navigation }) => {
        return (
            <Header>
              <Left style={{ flexDirection: 'row' }}>
                <Button
                    transparent
                    onPress={() => {navigation.pop()}}
                >
                  <Icon name="ios-arrow-back" />
                </Button>
                <Button
                    transparent
                    onPress={() => navigation.navigate("Home")}
                >
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
      header: ({ navigation }) => {
        return (
            <Header>
              <Left style={{ flexDirection: 'row' }}>
                <Button
                    transparent
                    onPress={() => {navigation.pop()}}
                >
                  <Icon name="ios-arrow-back" />
                </Button>
                <Button
                    transparent
                    onPress={() => navigation.navigate("Home")}
                >
                  <Icon name="ios-home" />
                </Button>
              </Left>
              <Body>
                <Text>Recipes</Text>
              </Body>
              <Right>
                <Button
                    transparent
                    onPress={() => navigation.navigate("RecipesFilter")}
                >
                  <Icon name="ios-options"/>
                </Button>
              </Right>
            </Header>
        )
      }
    }
  },

}