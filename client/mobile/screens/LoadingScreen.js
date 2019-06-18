import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Container, Header, Content, Spinner } from "native-base";

/**
 * Loading Screen displayed during application 'Open'.
 */
export default class LoadingScreen extends React.Component {
  // Fetch the token from storage then navigate to the appropriate place.
  // _bootstrapAsync = async () => {
  //  todo: Implement logic for token based Auth
  // this.props.navigation.navigate(userToken ? "App" : "Auth");
  // }
  componentDidMount() {
    // currently being used to simulate loading, navigates to onboarding route after 2 seconds
    setTimeout(() => {
      this.props.navigation.navigate("Carousel");
    }, 2000);
  }

  render() {
    return (
      <Container>
        <Content
          contentContainerStyle={{ flex: 1, backgroundColor: "#FBA208" }}
        >
          <View
            style={{
              flex: 2,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{width: 320, height: 200}}
              source={require("../assets/logos/loading/about-mh-logo-color.png")}
              resizeMode="contain"
            />
            <Text
              style={{ color: "#B52126", fontSize: 24, fontFamily: "source-sans-pro-semi-bold" }}
            >
              Find your healthy adventure.
            </Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
          >
            <Spinner color="#B52126" size="large" />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
