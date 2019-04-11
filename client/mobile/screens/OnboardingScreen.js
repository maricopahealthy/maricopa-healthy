// todo: OnboardingScreen
import React from 'react';
import {
  View,
  StyleSheet,
} from "react-native";
import { Container, Content, Button, Text, Form, Item, Input } from "native-base";

/**
 * Landing page for Users with no active sign-in credentials.
 */
export default class OnboardingScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content padder>
            <View style={{ flexGrow: 3, justifyContent: "center", alignItems: "center" }}>
              <Text>Onboarding Screen</Text>
            </View>
            <View style={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <Button
                  bordered
                  onPress={() => this.props.navigation.navigate("SignUp")}
              >
                <Text>Sign Up</Text>
              </Button>
              <Button
                  bordered
                  onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text>Login</Text>
              </Button>
            </View>
          </Content>
        </Container>
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