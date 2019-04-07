// todo: AboutScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * About Page for Maricopa Healthy Program.
 */
export default class AboutScreen extends React.Component {

  render() {
    return (
        <View>
          <Text>About Screen</Text>
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