// todo: ResourcesListScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Default Resources view displaying list of Resources.
 */
export default class ResourcesListScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Resources List Screen</Text>
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