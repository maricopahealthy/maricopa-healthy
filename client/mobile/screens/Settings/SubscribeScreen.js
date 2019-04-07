// todo: SubscribeScreen
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

/**
 * Primary Screen for managing User's subscriptions.
 */
export default class SubscribeScreen extends React.Component {

  render() {
    return (
        <View>
          <Text>Settings Subscribe Screen</Text>
          <Button title="Subscribe" onPress={() => {}} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});