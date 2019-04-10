// todo: HomeScreen
// note: Points-of-Interest list view
// note: Points-of-Interest Card
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from "react-native";

/**
 * Application main page used for displaying and navigating the Maricopa Healthy Application Resources.
 */
export default class HomeScreen extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>Home Screen</Text>
          <Button
            title="Markets"
            onPress={() => {this.props.navigation.navigate("Markets")}}
          />
          <Button
              title="Recipes"
              onPress={() => {this.props.navigation.navigate("Recipes")}}
          />
          <Button
              title="Parks"
              onPress={() => {this.props.navigation.navigate("Parks")}}
          />
          <Button
              title="Active"
              onPress={() => {this.props.navigation.navigate("Active")}}
          />
          <Button
              title="Events"
              onPress={() => {this.props.navigation.navigate("Events")}}
          />
          <Button
              title="Resources"
              onPress={() => {this.props.navigation.navigate("Resources")}}
          />
          <Button
              title="Subscribe"
              onPress={() => {this.props.navigation.navigate("Subscribe")}}
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