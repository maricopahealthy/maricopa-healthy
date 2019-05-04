import React from 'react';
import { StyleSheet, View } from 'react-native';
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
const NavigationalHeaderHomeScreen = ({ navigation }) => {
  return (
    <Header style={styles.color}>
      <Left>
        <View style={{ flexDirection: "row" }}>
          <Button
            transparent
            onPress={() => navigation.navigate("Settings")}
          >
            <Icon name="settings" style={{ color: "white" }} />
          </Button>
          <Button
            transparent
            onPress={() => navigation.navigate("Search")}
          >
            <Icon name="search" style={{ color: "white" }} />
          </Button>
        </View>
      </Left>
      <Body>
        <Text style={{ color: "#fff", fontSize: "19", fontWeight: "380" }}>
          Maricopa Healthy
        </Text>
      </Body>
      <Right>
        <View style={{ flexDirection: "row" }}>
          <Button
            transparent
            onPress={() => navigation.navigate("Notifications")}
          >
            <Icon name="notifications" style={{ color: "white" }} />
          </Button>
          <Button
            transparent
            onPress={() => navigation.navigate("Favorites")}
          >
            <Icon name="heart" style={{ color: "white" }} />
          </Button>
        </View>
      </Right>
    </Header>
  );
};

export default withNavigation(NavigationalHeaderHomeScreen);

const styles = StyleSheet.create({
  color: {
    backgroundColor: "#FBA208"
  }
});