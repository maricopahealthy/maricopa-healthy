import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

/**
 * ResourceCard is a presentational component used for displaying the features available for exploration from the Home Screen.
 */
const ResourceCard = (props) => {

  return (
    <Card transparent>
      <CardItem
        cardBody
        button
        onPress={() => props.navigation.navigate(props.item.resource)}
      >
        <Image source={props.item.image} style={styles.cardImage} />
        <Body style={styles.cardContent}>
          <Text style={styles.textBadge}>{props.item.title}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};

// withNavigation returns a component that wraps ResourceCard and passes in the
// navigation prop automatically. It behaves like connect() function in Redux.
export default withNavigation(ResourceCard);

const styles = StyleSheet.create({
  cardImage: {
    flex: 1,
    height: 120,
    width: null,
    borderRadius: 10
  },
  cardContent: {
    // overlay effect
    flex: 1,
    height: 200,
    width: null,
    position: "absolute",
    zIndex: 100,
    left: 0,
    top: 70,
    right: 0,
    backgroundColor: "transparent"
  },
  textBadge: {
    paddingHorizontal: 16,
    color: "#fff",
    backgroundColor: "#B52126",
    fontSize: 24,
    fontWeight: "600"
  }
});