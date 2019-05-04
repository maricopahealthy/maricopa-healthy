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
            <FlatList
                // HACK: react-native does not support dynamic paths in <Image source={...} />.
                // Instead we must pass the entire module as a prop with the image coming from a static location.
                data={[
                  {key: 'resource-0', resource: 'MarketsList', image: require('../assets/images/markets/home-card-markets.jpg')},
                  {key: 'resource-1', resource: 'RecipesList', image: require('../assets/images/recipes/home-card-recipes.jpg')},
                  {key: 'resource-2', resource: 'ParksList', image: require('../assets/images/parks/home-card-parks.jpg')},
                  {key: 'resource-3', resource: 'ActiveList', image: require('../assets/images/active/home-card-active.jpg')},
                  {key: 'resource-4', resource: 'EventsList', image: require('../assets/images/events/home-card-events.jpg')},
                  {key: 'resource-5', resource: 'ResourcesList', image: require('../assets/images/resources/home-card-resources.jpg')},
                  {key: 'resource-6', resource: 'Subscribe', image: require('../assets/images/subscribe/home-card-subscribe.jpg')}
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