import React from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Body, Button, Header, Icon, Left, Right, Text } from "native-base";

/**
 * NavigationalHeaderHome renders the navigationOptions header component shared across the 'Home' screen (ie - landing page) of all App Features.
 * It is not necessary to pass in navigation prop explicitly.
 *
 * @param {string} title - the name of the resource to display in the center of the navbar.
 * @param {string} filterScreenRoute - the named route to use when a user clicks the 'filters' icon in the right-hand side.
 * @returns - a functional component wrapped by Higher-order component: withNavigation().
 */
const NavigationalHeaderHomeScreen = ({ navigation, title, screenRoute }) => {
  return (
    <Header>
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