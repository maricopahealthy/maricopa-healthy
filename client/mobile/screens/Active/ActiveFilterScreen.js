// todo: ActiveFilterScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Display to add, modify, and delete filter categories for Active display results.
 */
export default class ActiveFilterScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Active Filter Screen</Text>
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