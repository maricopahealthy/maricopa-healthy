// todo: OnboardingScreen
import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import {
  Container,
  Content,
  Button,
  Text,
  Form,
  Item,
  Input
} from "native-base";
import { withNavigation } from "react-navigation";

var Device_Width = Dimensions.get("window").width;

/**
 * Landing page for Users with no active sign-in credentials.
 */
class OnboardingNotificationsScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#FBA208"
    }
  };

  render() {
    return (
      <Content
        padder
        contentContainerStyle={{
          flex: 1,
          width: Device_Width,
          backgroundColor: "#FBA208"
        }}
      >
        <View
          style={{
            flex: 5,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>Notifications</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <Button
            danger
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            <Text>Sign Up</Text>
          </Button>
          <Button
            danger
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text>Login</Text>
          </Button>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Text onPress={() => this.props.navigation.navigate("App")}>
            Skip and explore the app.
          </Text>
        </View>
      </Content>
    );
  }
}

export default withNavigation(OnboardingNotificationsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
