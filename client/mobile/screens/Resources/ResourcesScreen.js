// todo: ResourcesScreen
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Container, Content, Text } from 'native-base';

/**
 * Resources Screen for viewing individual resource records.
 */
export default class ResourcesScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Resource Screen</Text>
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