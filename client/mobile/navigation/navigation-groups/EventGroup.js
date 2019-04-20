import React from 'react'
import EventsRecordScreen from "../../screens/Events/EventsRecordScreen";
import EventsFilterScreen from "../../screens/Events/EventsFilter";
import EventsScreen from "../../screens/Events/EventsScreen";
import {Body, Button, Header, Icon, Left, Right, Text} from "native-base";

export default {

  Events: {
    screen: EventsScreen,
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
                <Text>Events</Text>
              </Body>
              <Right>
                <Button
                    transparent
                    onPress={() => navigation.navigate("EventsFilter")}
                >
                  <Icon name="ios-options"/>
                </Button>
              </Right>
            </Header>
        )
      }
    }
  },

  EventsFilter: {
    screen: EventsFilterScreen,
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
                <Button
                    transparent
                    // todo: implement action for Reset button
                    onPress={() => {}}
                >
                  <Text>Reset</Text>
                </Button>
              </Right>
            </Header>
        )
      }
    }
  },

  EventsRecord: {
    screen: EventsRecordScreen,
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
                <Text>Events</Text>
              </Body>
              <Right>
                <Button
                    transparent
                    // todo: implement function for share icon
                    onPress={() => {}}
                >
                  <Icon name="share"/>
                </Button>
              </Right>
            </Header>
        )
      }
    }
  },

}