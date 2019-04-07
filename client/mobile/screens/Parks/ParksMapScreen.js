// todo: ParksMapScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Default Parks view displaying pins of parks on a map.
 */
export default class ParksMapScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Parks Map Screen</Text>
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