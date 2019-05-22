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
const NavigationalHeaderRecord = ({ navigation }) => {
  return (
      <Header style={styles.color}>
        <Left style={{ flexDirection: 'row' }}>
          <Button
              transparent
              onPress={() => {navigation.pop()}}
          >
            <Icon name="ios-arrow-back" style={{ color: "white" }} />
          </Button>
          <Button
              transparent
              onPress={() => navigation.navigate("Home")}
          >
            <Icon name="ios-home" style={{ color: "white" }} />
          </Button>
        </Left>
        <Body style={{ flexDirection: 'row' }}>
          <Button
              transparent
              onPress={() => {}}
          >
            <Icon name="ios-arrow-up" style={{ color: "white" }} />
          </Button>
          <Button
              transparent
              onPress={() => {}}
          >
            <Icon name="ios-arrow-down" style={{ color: "white" }} />
          </Button>
        </Body>
        <Right>
          <Button
              transparent
              // todo: implement function for share icon
              onPress={() => {}}
          >
            <Icon name="share" style={{ color: "white" }} />
          </Button>
        </Right>
      </Header>
  )
};

export default withNavigation(NavigationalHeaderRecord);

const styles = StyleSheet.create({
  color: {
    backgroundColor: "#FBA208"
  }
});