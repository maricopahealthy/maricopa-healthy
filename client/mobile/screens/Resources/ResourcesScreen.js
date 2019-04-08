// todo: ResourcesScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Resources Screen for viewing individual resource records.
 */
export default class ResourcesScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Resources Screen</Text>
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