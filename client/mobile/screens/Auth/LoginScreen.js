// todo: LoginScreen
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";

export default class LoginScreen extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>Login Screen</Text>
          <Button
            title="Login"
            onPress={() => {this.props.navigation.navigate("App")}}
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