// todo: OnboardingScreen
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from "react-native";

/**
 * Landing page for Users with no active sign-in credentials.
 */
export default class OnboardingScreen extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>Onboarding Screen</Text>
          <Button
            title="Sign Up"
            onPress={() => this.props.navigation.navigate("SignUp")}
          />
          <Button
            title="Log In"
            onPress={() => this.props.navigation.navigate("Login")}
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