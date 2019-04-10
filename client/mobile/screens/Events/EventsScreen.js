// todo: EventsScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Events resource home page displaying upcoming events.
 */
export default class EventsScreen extends React.Component {

  render() {
    return (
        <View>
          <Text>Events Home Screen</Text>
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