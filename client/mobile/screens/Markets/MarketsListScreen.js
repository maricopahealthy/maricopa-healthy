// todo: MarketsListScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Markets view displaying list of markets.
 */
export default class MarketsListScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Markets List Screen</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});