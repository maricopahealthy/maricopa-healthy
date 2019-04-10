// todo: SubscribeRecipesScreen

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Weekly Recipe registration information and consent form.
 */
export default class SubscribeRecipesScreen extends React.Component {

  render() {
    return (
        <View>
          <Text>Weekly Recipes</Text>
          <Button title="Sign me up!" onPress={() => {}} />
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