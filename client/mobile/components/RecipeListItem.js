import React from "react";
import {
  Body,
  Card,
  CardItem,
  Icon,
  Left,
  ListItem,
  Right,
  Text,
  Thumbnail
} from "native-base";
import { withNavigation } from "react-navigation";

/**
 * RecipeListItem is a presentational component for the Recipes home screen list view. It renders a stylistically relevant Card for the Recipe Home screen.
 */
const RecipeListItem = props => {
  return (
    <Card transparent>
      <CardItem
        button
        onPress={() =>
          props.navigation.navigate("RecipesRecord", { id: props.item.id })
        }
      >
        <Left>
          <Thumbnail large source={require(props.item.thumbnail)} />
          <Body>
            <Text>{props.item.name}</Text>
            <Text note>
              {props.item.stars} {props.item.reviews}
            </Text>
          </Body>
        </Left>
        <Right>
          <Icon name="ios-arrow-forward" />
        </Right>
      </CardItem>
    </Card>
  );
};

export default withNavigation(RecipeListItem);
