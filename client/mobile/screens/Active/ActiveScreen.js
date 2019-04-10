// todo: ActiveScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Active Screen for viewing individual Active records.
 */
export default class ActiveScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Active Screen</Text>
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