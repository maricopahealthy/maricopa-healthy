// todo: LearnMoreScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Deep-linked detail view for a single Event record.
 */
export default class LearnMoreScreen extends React.Component {

  render() {
    return (
        <View>
          <Text>Learn More Screen</Text>
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