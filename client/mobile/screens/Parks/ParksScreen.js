// todo: ParksScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Parks Screen for viewing individual park records.
 */
export default class ParksScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Parks Screen</Text>
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