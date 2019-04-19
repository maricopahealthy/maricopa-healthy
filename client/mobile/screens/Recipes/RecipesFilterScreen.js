// todo: RecipesFilterScreen
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Container, Content, ListItem, Text, Item, Input } from 'native-base';

/**
 *  Display to add, modify, and delete filter categories for Recipes display results.
 */
export default class RecipesFilterScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content padder>
            <FlatList>
              {/* Ingredient SearchBox */}
              <ListItem itemDivider>
                <Text>Ingredient</Text>
              </ListItem>
              <ListItem>
                <Item regular>
                  <Input placeholder='Enter Ingredient Name'/>
                </Item>
              </ListItem>
              {/* Meal Type filters */}
              <ListItem itemDivider>
                <Text>Meal Type</Text>
              </ListItem>
              <ListItem></ListItem>
              {/* Star Ratings */}
              <ListItem itemDivider>
                <Text>Rating</Text>
              </ListItem>
              <ListItem></ListItem>
              {/* Sort By categories */}
              <ListItem itemDivider>
                <Text>Sort By</Text>
              </ListItem>
            </FlatList>
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