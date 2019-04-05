// todo: ResourceListScreen
// component corresponds to the Markets ListView, Recipes ListView, etc...
import React from 'react';
import {
  View,
  Text, StyleSheet
} from "react-native";

export default class AboutScreen extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>About Text Screen</Text>
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