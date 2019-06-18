import React from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card, CardItem, Left, Body, Right, Icon, Text, Thumbnail } from 'native-base';

/**
 * RecordTile is used for previewing different records.
 */
const RecordTile = (props) => {
  const marketThumbnail = require("../assets/thumbnails/markets/markets-thumb-placeholder-01.png");
  const parkThumbnail = require("../assets/thumbnails/parks/parks-thumb-placeholder-01.png");
  return (
    <>
      <CardItem
        button
        style={props.index % 2 === 0 ? styles.whiteCard : styles.greyCard}
        onPress={() => props.navigation.navigate(props.type, {id: props.item.id})}
      >
          <Thumbnail large source={props.type === "Markets" ? marketThumbnail : parkThumbnail} />
        <Body style={{ justifyContent: "center", marginLeft: 15 }}>
          <Text style={styles.header}>{props.item.name}</Text>
          <Text style={styles.teaser}>{props.item.street_address}</Text>
        </Body>
        <Icon style={styles.arrow} name="ios-arrow-forward" />
      </CardItem>
    </>
  );
};

export default withNavigation(RecordTile);

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