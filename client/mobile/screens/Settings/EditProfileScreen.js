// todo: EditProfileScreen
import React from 'react';
import {
  View, Text, StyleSheet
} from "react-native";

/**
 * Users can edit their profile settings.
 */
export default class EditProfileScreen extends React.Component {

  render() {
    return (
        <View>
          <Text>Edit Profile Screen</Text>
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