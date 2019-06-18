import React from 'react';
import {StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Body, Button, Header, Icon, Left, Right, Text} from "native-base";

/**
 * NavigationalHeaderHome renders the navigationOptions header component shared across the 'Home' screen (ie - landing
 * page) of all App Features. It is not necessary to pass in navigation prop explicitly.
 *
 * @param {string} title - the name of the resource to display in the center of the navbar.
 * @param {string} filterScreenRoute - the named route to use when a user clicks the 'filters' icon in the right-hand
 *   side.
 * @returns - a functional component wrapped by Higher-order component: withNavigation().
 */
const NavigationalHeaderHome = ({navigation, title, filterScreenRoute}) => {
  return (
    <Header style={styles.color}>
      <Left style={{flexDirection: 'row'}}>
        <Button
          transparent
          onPress={() => navigation.pop()}
        >
          <Icon name="ios-arrow-back" style={{color: "white"}}/>
        </Button>
        <Button
          transparent
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="ios-home" style={{color: "white"}}/>
        </Button>
      </Left>
      <Body>
        <Text style={styles.title}>{title}</Text>
      </Body>
      <Right>
        <Button
          transparent
          onPress={() => navigation.navigate(filterScreenRoute)}
        >
          <Icon name="ios-options" style={{color: "white"}}/>
        </Button>
      </Right>
    </Header>
  )
};

export default withNavigation(NavigationalHeaderHome);

const styles = StyleSheet.create({
  color: {
    backgroundColor: "#FBA208"
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "source-sans-pro-semi-bold"
  }
});