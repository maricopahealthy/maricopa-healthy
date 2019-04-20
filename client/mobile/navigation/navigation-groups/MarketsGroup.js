import React from 'react'
import MarketsScreen from "../../screens/Markets/MarketsScreen"
import MarketsFilterScreen from "../../screens/Markets/MarketsFilterScreen";
import { Body, Button, Header, Icon, Left, Right, Text } from "native-base";
import MarketsListScreen from "../../screens/Markets/MarketsListScreen";

export default {

  MarketsList: {
    screen: MarketsListScreen,
    navigationOptions: {
      header: ({ navigation }) => {
        return (
          <Header>
            <Left style={{ flexDirection: 'row' }}>
              <Button
                transparent
                onPress={() => { navigation.pop() }}
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
              <Text>Markets</Text>
            </Body>
            <Right>
              <Button
                transparent
                onPress={() => navigation.navigate("MarketsFilter")}
              >
                <Icon name="ios-options" />
              </Button>
            </Right>
          </Header>
        )
      }
    }
  },

  MarketsFilter: {
    screen: MarketsFilterScreen,
    navigationOptions: {
      header: ({ navigation }) => {
        return (
          <Header>
            <Left style={{ flexDirection: 'row' }}>
              <Button
                transparent
                onPress={() => { navigation.pop() }}
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
              <Button
                transparent
                // todo: implement action for Reset button
                onPress={() => { }}
              >
                <Text>Reset</Text>
              </Button>
            </Right>
          </Header>
        )
      }
    }
  },

  Markets: {
    screen: MarketsScreen,
    navigationOptions: {
      header: ({ navigation }) => {
        return (
          <Header>
            <Left style={{ flexDirection: 'row' }}>
              <Button
                transparent
                onPress={() => { navigation.pop() }}
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
              <Text>Markets</Text>
            </Body>
            <Right>
              <Button
                transparent
                // todo: implement function for share icon
                onPress={() => { }}
              >
                <Icon name="share" />
              </Button>
            </Right>
          </Header>
        )
      }
    }
  },

}
// todo Add Markets Map Screen and Markets Learn More Screen