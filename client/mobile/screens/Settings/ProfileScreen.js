// todo: ProfileScreen
// note: NavigationCard list
// note: NavigationCard Component

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

/**
 * ProfileScreen is the primary User's settings screen from which they can access and manage their account information and settings.
 */
export default class ProfileScreen extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>Profile Screen</Text>
          <Button title="Favorites" onPress={() => {}} />
          <Button title="Notifications" onPress={() => {}} />
          <Button title="Meetup" onPress={() => {}} />
          <Button title="Subscribe" onPress={() => {}} />
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