// todo: HomeScreen
// note: Points-of-Interest list view
// note: Points-of-Interest Card
import React from 'react';
import { View, StyleSheet, FlatList } from "react-native";
import { Container, Content, Button, Text } from "native-base";
import ResourceCard from "../components/ResourceCard";


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
            <FlatList
                data={[
                  {key: 'resource-0', resource: 'Markets'},
                  {key: 'resource-1', resource: 'Recipes'},
                  {key: 'resource-2', resource: 'Active'},
                  {key: 'resource-3', resource: 'Events'},
                  {key: 'resource-4', resource: 'Resources'},
                  {key: 'resource-5', resource: 'Subscribe'},
                ]}
                renderItem={({item}) => <ResourceCard item={item} />}
            />
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