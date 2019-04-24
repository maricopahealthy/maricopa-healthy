import React from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Body, Button, Header, Icon, Left, Right, Text } from "native-base";

/**
 * NavigationalHeaderHomeScreen renders the navigationOptions header component on the Home Screen.
 * It is not necessary to pass in navigation prop explicitly.
 *
 * @param {string} title - the name of the resource to display in the center of the navbar.
 * @param {string} screenRoute - the named route to use when a user clicks the 'search' icon in the right-hand side.
 * @returns - a functional component wrapped by Higher-order component: withNavigation().
 */
const NavigationalHeaderHomeScreen = ({ navigation, title, screenRoute }) => {
  return (
    <Header>
      <Left>
        <Button
          transparent
          onPress={() => navigation.navigate("Settings")}
        >
          <Icon name="ios-settings" />
        </Button>
      </Left>
      <Body>
        <Text>{title}</Text>
      </Body>
      <Right>
        <Button
          transparent
          onPress={() => navigation.navigate(screenRoute)}
        >
          <Icon name="ios-search" />
        </Button>
      </Right>
    </Header>
  )
};

export default withNavigation(NavigationalHeaderHomeScreen);

const styles = StyleSheet.create({});