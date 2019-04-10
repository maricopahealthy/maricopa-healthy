// todo: SettingsHomeScreen
// note: NavigationCard component
import React from 'react';
import {
  View,
  Text, StyleSheet
} from "react-native";

/**
 * Primary Settings Screen from which User can access all their Settings and information.
 */
export default class SettingsHomeScreen extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>Settings Home Screen</Text>
          <Button title="Profile" onPress={() => {}}/>
          <Button title="Favorites" onPress={() => {}}/>
          <Button title="Notifications" onPress={() => {}}/>
          <Button title="Meetup" onPress={() => {}}/>
          <Button title="Subscribe" onPress={() => {}}/>
          <Button title="About" onPress={() => {}}/>
          <Button title="Contact" onPress={() => {}}/>
          <Button title="Privacy Policy" onPress={() => {}}/>
          <Button title="Terms of Service" onPress={() => {}}/>
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