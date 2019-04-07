// todo: MarketsScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Markets Screen for viewing individual market records.
 */
export default class MarketsScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Markets Screen</Text>
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