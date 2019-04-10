// todo: ActiveListScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Default Active view displaying list of Active.
 */
export default class ActiveListScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Active List Screen</Text>
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