import React from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Body, Button, Header, Icon, Left, Right, Text } from "native-base";

/**
 * NavigationalHeaderHome renders the navigationOptions header component shared across the 'Home' screen (ie - landing page) of all App Features.
 * It is not necessary to pass in navigation prop explicitly.
 *
 * @param {string} title - the name of the resource to display in the center of the navbar.
 * @returns - a functional component wrapped by Higher-order component: withNavigation().
 */
const NavigationalHeaderHomeScreen = ({ navigation, title }) => {
  return (
    <Header>
      <Left style={{ flexDirection: 'row' }}>
        <Button
          transparent
          onPress={() => navigation.pop()}
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
        <Text>{title}</Text>
      </Body>
      <Right>
      </Right>
    </Header>
  )
};

export default withNavigation(NavigationalHeaderHomeScreen);

const styles = StyleSheet.create({});