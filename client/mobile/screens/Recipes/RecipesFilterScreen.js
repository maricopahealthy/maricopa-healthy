// todo: RecipesFilterScreen
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

/**
 *  Display to add, modify, and delete filter categories for Recipes display results.
 */
export default class RecipesFilterScreen extends React.Component {

  render() {
    return (
        <View>
          <Text>Recipe Filter Screen</Text>
          <Button title="Apply Filter" onPress={() => {}} />
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