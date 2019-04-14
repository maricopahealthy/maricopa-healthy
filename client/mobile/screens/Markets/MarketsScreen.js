// todo: MarketsScreen
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from "native-base";


/**
 * Markets Screen for viewing individual market records.
 */
export default class MarketsScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Markets Screen</Text>
        <Button
          danger
          onPress={() => this.props.navigation.navigate("MarketsList")}
          title="List"
        ><Text>List</Text></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});