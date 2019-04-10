// todo: LoadingScreen
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from "react-native";

/**
 * Loading Screen displayed during application 'Open'.
 */
export default class LoadingScreen extends React.Component {
  // Fetch the token from storage then navigate to the appropriate place.
  // _bootstrapAsync = async () => {
  //  todo: Implement logic for token based Auth
  // this.props.navigation.navigate(userToken ? "App" : "Auth");
  // }

  render() {
    return (
        <View style={styles.container}>
          <Text>Loading Screen</Text>
          <Button
            title="On Boarding"
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