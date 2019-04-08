// todo: SearchScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Search with text box and list view of all matching search results.
 */
export default class SearchScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Search Home Screen</Text>
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