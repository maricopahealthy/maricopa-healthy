// todo: ResetPasswordScreen
import React from 'react';
import {
  View,
  Text, StyleSheet
} from "react-native";

export default class ResetPasswordScreen extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>Reset Password Screen</Text>
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