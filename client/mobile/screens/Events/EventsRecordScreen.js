// todo: EventsRecordScreen
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

/**
 * Summary view for a single Event record.
 */
export default class EventsRecordScreen extends React.Component {

  render() {
    return (
        <View>
          <Text>Events Record Screen</Text>
          <Button title="Learn More" onPress={() => {}} />
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