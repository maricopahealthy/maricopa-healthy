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
class OnboardingFavoritesScreen extends React.Component {
  render() {
    return (
      <Content padder contentContainerStyle={{ flex: 1, width: Device_Width }}>
        <View
          style={{
            flex: 5,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>Favorites</Text>
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

export default withNavigation(OnboardingFavoritesScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
