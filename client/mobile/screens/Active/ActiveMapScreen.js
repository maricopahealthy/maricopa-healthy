// todo: ActiveMapScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Active Map view displaying pins of Parks that include selected active on a map.
 */
export default class ActiveMapScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Active Map Screen</Text>
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