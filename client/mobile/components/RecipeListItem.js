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
import {StyleSheet} from "react-native";

/**
 * RecipeListItem is a presentational component for the Recipes home screen list view. It renders a stylistically relevant Card for the Recipe Home screen.
 */
const RecipeListItem = props => {
  const thumbnail = require("../assets/thumbnails/recipes/apple-pecan-bars.png");
  return (
    <Card transparent style={{marginTop: 0, marginBottom: 0}}>
      <CardItem
        button
        style={props.index % 2 === 0 ? styles.whiteCard : styles.greyCard}
        onPress={() =>
          props.navigation.navigate("RecipesRecord", {id: props.item.id})
        }
      >
        <Thumbnail
          style={{width: 72, height: 72}}
          source={thumbnail}
        />
        <Body style={{justifyContent: "center", marginLeft: 15}}>
          <Text style={styles.header}>{props.item.name}</Text>
          <Text style={styles.teaser}>
            {props.item.stars} {props.item.reviews}
          </Text>
        </Body>
        <Icon style={styles.arrow} name="ios-arrow-forward"/>
      </CardItem>
    </Card>
  );
};

export default withNavigation(RecipeListItem);

const styles = StyleSheet.create({
  whiteCard: {
    backgroundColor: "white",
    margin: 0,
    height: 88,
    padding: 8
  },
  greyCard: {
    backgroundColor: "#F6F6F6",
    margin: 0,
    height: 88,
    padding: 8
  },
  arrow: {
    color: "#8E8E93",
    width: 12
  },
  header: {
    fontSize: 18,
    fontFamily: "source-sans-pro-semi-bold"
  },
  teaser: {
    fontSize: 16,
    fontFamily: "source-sans-pro",
    color: "#8E8E93"
  }
});
