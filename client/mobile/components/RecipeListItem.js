import React from 'react';
import {Body, Card, CardItem, Icon, Left, ListItem, Right, Text, Thumbnail} from "native-base";
import { withNavigation } from 'react-navigation';

/**
 * RecipeListItem is a presentational component for the Recipes home screen list view. It renders a stylistically relevant Card for the Recipe Home screen.
 */
const RecipeListItem = (props) => {
  return (
      <Card transparent>
        <CardItem
            button
            onPress={() => {props.navigation.navigate("RecipesRecord")}}
        >
          <Left>
            <Thumbnail source={{uri: 'https://placekitten.com/g/200/200'}} />
            <Body>
              <Text>{props.item.title}</Text>
              <Text note>
                {props.item.stars} {props.item.reviews}
              </Text>

            </Body>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </Card>
  )
};

export default withNavigation(RecipeListItem);