import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base';
import { resetFilter } from "../actions/filterActions";
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux'

/**
 * ResourceCard is a presentational component used for displaying the features available for exploration from the Home Screen.
 */
const ResourceCard = (props) => {

  return (
    <Card transparent>
      <CardItem
        cardBody
        button
        onPress={() => {
            props.resetFilter();
            props.navigation.navigate(props.item.resource)
          }
        }
      >
        <Image source={props.item.image} style={styles.cardImage} />
        <Body style={styles.cardContent}>
          <Text style={styles.textBadge}>{props.item.title}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    resetFilter: () => {
      dispatch (
        resetFilter()
      )
    }
  }
};

// withNavigation returns a component that wraps ResourceCard and passes in the
// navigation prop automatically. It behaves like connect() function in Redux.
export default connect(null, mapDispatchToProps)(withNavigation(ResourceCard));

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
    fontFamily: "source-sans-pro-semi-bold"
  }
});