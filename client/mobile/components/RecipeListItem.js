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
import {withNavigation} from "react-navigation";

/**
 * RecipeListItem is a presentational component for the Recipes home screen list view. It renders a stylistically relevant Card for the Recipe Home screen.
 */
const RecipeListItem = props => {
  const thumbnail = require("../assets/thumbnails/recipes/apple-pecan-bars.png");
  return (
    <Card transparent>
      <CardItem
        button
        style={props.index % 2 === 0 ? {backgroundColor: "white", margin: 0} : {backgroundColor: "#F6F6F6", margin: 0}}
        onPress={() =>
          props.navigation.navigate("RecipesRecord", {id: props.item.id})
        }
      >
        <Thumbnail
          large
          source={thumbnail}
        />
        <Body style={{justifyContent: "center", marginLeft: 15}}>
          <Text>{props.item.name}</Text>
          <Text note>
            {props.item.stars} {props.item.reviews}
          </Text>
        </Body>
        <Icon name="ios-arrow-forward"/>
      </CardItem>
    </Card>
  );
};

export default withNavigation(RecipeListItem);
