// todo: ParksListScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Parks view displaying list of parks.
 */
export default class ParksListScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Parks List Screen</Text>
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