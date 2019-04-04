// todo: HomeScreen
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from "react-native";

export default class HomeScreen extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>Home Screen</Text>
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