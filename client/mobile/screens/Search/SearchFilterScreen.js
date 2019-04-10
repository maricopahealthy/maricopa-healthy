// todo: SearchFilterScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Display to add, modify, and delete filter categories for Search display results.
 */
export default class SearchFilterScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Search Filter Screen</Text>
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