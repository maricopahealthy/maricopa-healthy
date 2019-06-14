import React from 'react';
import {StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';
import {Body, Button, Header, Icon, Left, Right, Text} from "native-base";
import {connect} from "react-redux"
import {resetFilter} from "../../actions/filterActions";

/**
 * NavigationalHeader renders the navigationOptions header component shared across the ... screen (ie - ...) of all App features.
 * It is not necessary to pass in navigation prop explicitly.
 *
 * @returns - a functional component wrapped by Higher-order component: withNavigation();
 */
const NavigationalHeaderFilter = ({ navigation, reset }) => {
  return (
      <Header style={styles.color}>
        <Left style={{ flexDirection: 'row' }}>
          <Button
              transparent
              onPress={() => {navigation.pop()}}
          >
            <Icon name="ios-arrow-back" style={{ color: "#fff" }} />
          </Button>
          <Button
              transparent
              onPress={() => navigation.navigate("Home")}
          >
            <Icon name="ios-home" style={{ color: "#fff" }} />
          </Button>
        </Left>
        <Body>
          <Text style={{ color: "#fff", fontSize: 25, fontWeight: "400" }}>Filter</Text>
        </Body>
        <Right>
          <Button
              transparent
              onPress={() => reset()}
          >
            <Text style={{ color: "#fff" }}>Reset</Text>
          </Button>
        </Right>
      </Header>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    reset: () => {
      dispatch(
        resetFilter()
      )
    }
  }
};

export default connect(null, mapDispatchToProps)(withNavigation(NavigationalHeaderFilter));

const styles = StyleSheet.create({
  color: {
    backgroundColor: "#FBA208"
  }
});