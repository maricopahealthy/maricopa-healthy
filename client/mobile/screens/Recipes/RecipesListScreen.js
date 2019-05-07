// todo: RecipesListScreen
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Container, Content, Text, Card, CardItem, ListItem, Thumbnail, Left, Body, Right, Icon } from 'native-base';
import RecipeListItem from "../../components/RecipeListItem";


/**
 * Recipes resource home screen displaying a list view of available recipes.
 */
export default class RecipesListScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content style={{ flex: 1 }}>
            <FlatList
                data={[
                  {key: 0, title: 'Recipe 1', stars: '4 stars', reviews: '37 Reviews', image: require("../../assets/thumbnails/recipes/apple-pecan-bars.png")},
                  {key: 1, title: 'Recipe 2', stars: '4.5 stars', reviews: '25 Reviews', image: require("../../assets/thumbnails/recipes/apple-pecan-bars.png")},
                  {key: 2, title: 'Recipe 3', stars: '4.3 stars', reviews: '10 Reviews', image: require("../../assets/thumbnails/recipes/apple-pecan-bars.png")},
                ]}
                renderItem={({item}) => <RecipeListItem item={item} />}
            />
          </Content>
        </Container>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});