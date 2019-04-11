// todo: LoadingScreen
import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Container, Header, Content, Spinner } from 'native-base'

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
    setTimeout(() => {this.props.navigation.navigate("Onboarding")}, 2000);
  }

  render() {
    return (
        <Container>
          <Header></Header>
          <Content>
            <Text>Loading Screen</Text>
            <Spinner  />
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