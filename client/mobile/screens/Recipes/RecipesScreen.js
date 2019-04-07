// todo: RecipesScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Recipes resource home screen displaying a list view of available recipes.
 */
export default class RecipesScreen extends React.Component {

  render() {
    return (
        <View>
          <Text>Recipes Home Screen</Text>
        </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});