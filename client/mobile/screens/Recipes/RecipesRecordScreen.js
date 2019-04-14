// todo: RecipesRecordScreen
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Container, Content, Card, CardItem, Left, Thumbnail, Body, Text, Right, Icon, ListItem } from "native-base";

/**
 *
 */
export default class RecipesRecordScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content>
            <Card transparent>
              <CardItem>
                <Left>
                  <Thumbnail />
                  <Body>
                    <Text>This is the card title</Text>
                  </Body>
                </Left>
                <Right>
                  <Icon name='heart-empty' />
                </Right>
              </CardItem>
            </Card>
            <FlatList>
              <ListItem divider>
                <Text>Ingredients</Text>
              </ListItem>
              <ListItem divider>
                <Text>Directions</Text>
              </ListItem>
              <ListItem divider>
                <Text>Nutrition Facts (Per Serving)</Text>
              </ListItem>
              <ListItem divider>
                <Text>Reviews</Text>
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