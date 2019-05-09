// todo: MarketsMapScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Default Markets view displaying pins of markets on a map.
 */
export default class MarketsMapScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        {/* //todo Add map component and functionality */}
        <Text>Markets Map Screen</Text>
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