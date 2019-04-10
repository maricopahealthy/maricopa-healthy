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
            onPress={() => {}}
          />
          <Button
              title="Recipes"
              onPress={() => {}}
          />
          <Button
              title="Parks"
              onPress={() => {}}
          />
          <Button
              title="Active"
              onPress={() => {}}
          />
          <Button
              title="Events"
              onPress={() => {}}
          />
          <Button
              title="Resources"
              onPress={() => {}}
          />
          <Button
              title="Subscribe"
              onPress={() => {}}
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