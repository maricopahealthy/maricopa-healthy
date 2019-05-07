import React from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button, Header, Icon, Item, Input, Text } from "native-base";

/**
 * NavigationalHeaderSearch renders the navigationOptions header component shared across the 'Home' screen (ie - landing page) of all App Features.
 * It is not necessary to pass in navigation prop explicitly.
 *
 * @param {string} title - the name of the resource to display in the center of the navbar.
 * @returns - a functional component wrapped by Higher-order component: withNavigation().
 */
const NavigationalHeaderSearch = ({ navigation }) => {
  return (
    <Header searchBar rounded style={styles.color}>
      <Item style={{backgroundColor: "white"}}>
        <Icon name="ios-search" />
        <Input placeholder="Search" />
        <Button style={{ backgroundColor: "#8E8E93", height: "80%", marginTop: 4, marginRight: 8}}>
          <Text style={{ color: "white", fontSize: 10 }}>CLEAR</Text>
        </Button>
      </Item>
      <Button onPress={() => navigation.navigate("Home")} transparent>
        <Icon style={{color: "white", fontSize: 40}} name="ios-close" />
      </Button>
    </Header>
  )
};

export default withNavigation(NavigationalHeaderSearch);

const styles = StyleSheet.create({
  color: {
    backgroundColor: "#FBA208"
  }
});