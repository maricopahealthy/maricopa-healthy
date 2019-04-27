// todo: LoadingScreen
import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { Container, Header, Content, Spinner } from 'native-base'

/**
 * Loading Screen displayed during application 'Open'.
 */
export default class LoadingScreen extends React.Component {
  // static navigationOptions = {
  //   headerStyle: {
  //     backgroundColor: '#FBA208'
  //   }
  // }
  // Fetch the token from storage then navigate to the appropriate place.
  // _bootstrapAsync = async () => {
  //  todo: Implement logic for token based Auth
  // this.props.navigation.navigate(userToken ? "App" : "Auth");
  // }
  componentDidMount() {
    // currently being used to simulate loading, navigates to onboarding route after 2 seconds
    setTimeout(() => {this.props.navigation.navigate("Onboarding")}, 8000);
  }

  render() {
    return (
        <Container>
          <Content
              padder
              contentContainerStyle={{ flex: 1, backgroundColor: 'orange' }}
          >
            <View
                style={{ flex: 2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
              <Image source={require('../assets/logos/loading/about-mh-logo-color.png')} />
              <Text style={{ color: '#B52126', fontSize: '25', fontWeight: 'bold' }}>Find your healthy adventure.</Text>
            </View>
            <View
                style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
            >
              <Spinner color='red' />
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