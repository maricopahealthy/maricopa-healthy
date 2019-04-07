// todo: TermsOfServiceScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Displays Maricopa Healthy Terms of Service information.
 */
export default class TermsOfServiceScreen extends React.Component {

  render() {
    return (
        <View>
          <Text>Terms of Service Screen</Text>
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