// todo: HomeScreen
// note: Points-of-Interest list view
// note: Points-of-Interest Card
import React from 'react';
import { View, StyleSheet } from "react-native";
import { Container, Content, Button, Text } from "native-base";


/**
 * Application main page used for displaying and navigating the Maricopa Healthy Application Resources.
 */
export default class HomeScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
              <Text>Home Screen</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
              <Button
                  bordered
                  onPress={() => {this.props.navigation.navigate("Markets")}}
              >
                <Text>Markets</Text>
              </Button>
              <Button
                  bordered
                  onPress={() => {this.props.navigation.navigate("Recipes")}}
              >
                <Text>Recipes</Text>
              </Button>
              <Button
                  bordered
                  onPress={() => {this.props.navigation.navigate("Active")}}
              >
                <Text>Active</Text>
              </Button>
              <Button
                  bordered
                  onPress={() => {this.props.navigation.navigate("Events")}}
              >
                <Text>Events</Text>
              </Button>
              <Button
                  bordered
                  onPress={() => {this.props.navigation.navigate("Resources")}}
              >
                <Text>Resources</Text>
              </Button>
              <Button
                  bordered
                  onPress={() => {this.props.navigation.navigate("Subscribe")}}
              >
                <Text>Subscribe</Text>
              </Button>
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