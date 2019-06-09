import React from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Body, Button, Header, Icon, Left, Right, Text } from "native-base";

/**
 * NavigationalHeaderAuth renders the navigationOptions header component shared across the 'Auth' screens.
 * It is not necessary to pass in navigation prop explicitly.
 *
 * @param {string} title - the name of the resource to display in the center of the navbar.
 * @returns - a functional component wrapped by Higher-order component: withNavigation().
 */
const NavigationalHeaderAuth = ({ navigation, title }) => {
  return (
    <Header transparent style={styles.color}>
      <Left style={{ flexDirection: 'row', flex: 1 }}>
        <Button
          transparent
          onPress={() => navigation.pop()}
        >
          <Icon name="ios-arrow-back" style={{ color: "black" }}/>
        </Button>
      </Left>
      <Body style={{flex: 6}}>
        <Text style={styles.title}>{title}</Text>
      </Body>
      <Right style={{flex: 1}}>
        <Text> </Text>
      </Right>
    </Header>
  )
};

export default withNavigation(NavigationalHeaderAuth);

const styles = StyleSheet.create({
  color: {
    backgroundColor: "#E5E5EA"
  },
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "600"
  }
});