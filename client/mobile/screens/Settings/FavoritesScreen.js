// todo: FavoritesScreen
// note:
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

/**
 * Primary screen for accessing User's 'Favorite-d' content.
 */
export default class FavoritesScreen extends React.Component {

  render() {
    return (
        <View>
          <Text>Settings Favorites Screen</Text>
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