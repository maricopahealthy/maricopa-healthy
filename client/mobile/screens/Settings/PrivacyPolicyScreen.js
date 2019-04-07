// todo: PrivacyPolicyScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Displays Maricopa Healthy Privacy Policy information.
 */
export default class PrivacyPolicyScreen extends React.Component {

  render() {
    return (
        <View>
          <Text>Privacy Policy Screen</Text>
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