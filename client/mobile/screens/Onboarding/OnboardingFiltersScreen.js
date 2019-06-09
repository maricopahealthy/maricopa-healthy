import React from "react";
import { View, StyleSheet, ScrollView, Dimensions, Image } from "react-native";
import {
  Container,
  Content,
  Button,
  Text,
  Icon,
  Form,
  Item,
  Input
} from "native-base";
import { withNavigation } from "react-navigation";

var Device_Width = Dimensions.get("window").width;

/**
 * Landing page for Users with no active sign-in credentials.
 */
class OnboardingFiltersScreen extends React.Component {
  render() {
    return (
      <Content
        padder
        contentContainerStyle={{
          flex: 1,
          width: Device_Width,
          backgroundColor: "#667747"
        }}
      >
        {/* Page logo */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image source={require("../../assets/logos/onboarding/onboarding-mh-logo-white.png")} />
        </View>
        {/* Page description */}
        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
          <Icon name="options" style={{ color: '#fff', fontSize: 110 }} />
          <Text style={{ color: '#fff', fontSize: 32, fontWeight: 'bold' }}>Filters</Text>
          <Text style={{ color: '#fff', fontSize: 24, fontWeight: '300', textAlign: 'center' }}>Sort content to find just what you want.</Text>
        </View>
        {/* Login + Signup Buttons */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <Button
            bordered
            light
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            <Text>Sign Up</Text>
          </Button>
          <Button
            bordered
            light
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text>Login</Text>
          </Button>
        </View>
        {/* Explore App */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Text
            style={{ color: '#fff' }}
            onPress={() => this.props.navigation.navigate("App")}
          >
            Skip and explore the app.
          </Text>
        </View>
      </Content>
    );
  }
}

export default withNavigation(OnboardingFiltersScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
