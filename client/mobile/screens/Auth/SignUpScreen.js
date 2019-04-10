// todo: SignUpScreen
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import { NavigationActions } from 'react-navigation/typescript/react-navigation';

export default class SignUpScreen extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>SignUp Screen</Text>
          <Button
            title="Create Account"
            // onPress={() => this.props.navigation.reset([NavigationActions.navigate({routeName: "Login"})],0)}
            onPress={() => this.props.navigation.navigate("OnBoarding")}
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