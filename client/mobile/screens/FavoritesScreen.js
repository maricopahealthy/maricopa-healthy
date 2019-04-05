// todo: FavoritesScreen
import React from 'react';
import {
  View,
  Text, StyleSheet
} from "react-native";

export default class FavoritesScreen extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>Favorites Screen</Text>
          <Button
            title="Create Account"
            onPress={() => {}}
          />
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