import React from 'react';
import {StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';
import {Body, Button, Header, Icon, Left, Right, Text} from "native-base";

/**
 * NavigationalHeader renders the navigationOptions header component shared across the 'Filters' screen (ie - filter categories page) of all App features.
 * It is not necessary to pass in navigation prop explicitly.
 *
 * @param {string} title - the name of the resource to display in the center of the navbar.
 * @returns - a functional component wrapped by Higher-order component: withNavigation();
 */
const NavigationalHeaderFilter = ({ navigation }) => {
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
        <Body style={{ flexDirection: 'row' }}>
          <Button
              transparent
              onPress={() => {}}
          >
            <Icon name="ios-arrow-up"></Icon>
          </Button>
          <Button
              transparent
              onPress={() => {}}
          >
            <Icon name="ios-arrow-down"></Icon>
          </Button>
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
};

export default withNavigation(NavigationalHeaderFilter);

const styles = StyleSheet.create({});