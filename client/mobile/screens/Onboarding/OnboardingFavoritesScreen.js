import React from "react";
import {View, StyleSheet, ScrollView, Dimensions, Image} from "react-native";
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
import {withNavigation} from "react-navigation";

var Device_Width = Dimensions.get("window").width;

/**
 * Landing page for Users with no active sign-in credentials.
 */
class OnboardingFavoritesScreen extends React.Component {
  render() {
    return (
      <Content
        padder
        contentContainerStyle={styles.container}
      >
        {/* Page logo */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image source={require("../../assets/logos/onboarding/onboarding-mh-logo-white.png")}/>
        </View>
        {/* Page description */}
        <View style={{flex: 2, justifyContent: "center", alignItems: "center"}}>
          <Icon name="heart" style={{color: '#fff', fontSize: 110}}/>
          <Text style={styles.title}>Favorites</Text>
          <Text style={styles.tag}>Tap to add
            something to
            your list of Favs.</Text>
        </View>
        {/* Carousel Indicators */}
        <View style={{flex: 1}}></View>
        {/* Login + Signup Buttons */}
        <View style={{flex: 1}}>
          <View style={{flex: 1, flexDirection: "row", justifyContent: "space-evenly"}}>
            <Button
              bordered
              light
              style={{width: 150, justifyContent: "center"}}
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              <Text style={styles.btn}>Sign Up</Text>
            </Button>
            <Button
              bordered
              light
              style={{width: 150, justifyContent: "center"}}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={styles.btn}>Login</Text>
            </Button>
          </View>
          {/* Explore App */}
          <View style={{flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <Text
              style={{color: '#fff', fontSize: 16, fontFamily: "source-sans-pro"}}
              onPress={() => this.props.navigation.navigate("App")}
            >
              Skip and explore the app.
            </Text>
          </View>
        </View>
      </Content>
    );
  }
}

export default withNavigation(OnboardingFavoritesScreen);

const styles = StyleSheet.create({
  container: {flex: 1, width: Device_Width, backgroundColor: "#B52126"},
  title: {color: '#fff', fontSize: 32, fontFamily: "source-sans-pro-semi-bold"},
  tag: {color: '#fff', fontSize: 24, fontFamily: "source-sans-pro-light", textAlign: 'center', width: 300},
  btn: {color: '#fff', fontSize: 20, fontFamily: "source-sans-pro"}
});
