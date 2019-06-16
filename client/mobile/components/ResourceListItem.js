import React from 'react';
import {Card, CardItem, Left, Body, Right, Icon, Text, Thumbnail} from 'native-base';
import {withNavigation} from 'react-navigation';
import {StyleSheet} from "react-native";

const ResourceListItem = (props) => {
  const thumbnail = require("../assets/thumbnails/resources/resources-thumb-placeholder-01.png");
  return (
    <Card transparent style={{marginTop: 0, marginBottom: 0}}>
      <CardItem
        button
        style={props.index % 2 === 0 ? styles.whiteCard : styles.greyCard}
        onPress={() => props.navigation.navigate("ResourcesRecord", {id: props.item.id})}
      >
        <Thumbnail large source={thumbnail}/>
        {/* Resource Description */}
        <Body style={{justifyContent: "center", marginLeft: 15}}>
          <Text>{props.item.name}</Text>
          <Text note>{props.item.teaser}</Text>
        </Body>
        {/* Navigational Arrow */}
        <Icon name="ios-arrow-forward"/>
      </CardItem>
    </Card>
  )
};

export default withNavigation(ResourceListItem);

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
  }
});