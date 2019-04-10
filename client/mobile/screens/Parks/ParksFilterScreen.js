// todo: ParksFilterScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Display to add, modify, and delete filter categories for park display results.
 */
export default class ParksFilterScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Parks Filter Screen</Text>
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