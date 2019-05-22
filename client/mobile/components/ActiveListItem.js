import React from 'react';
import { Body, CardItem, Icon, Left, Right, Text, Thumbnail } from "native-base";
import { withNavigation } from 'react-navigation';

/**
 * ActiveListItem is a presentational component for the Actives records.
 */
const ActiveListItem = (props) => {
  return (
    <>
      <CardItem
        style={props.index % 2 === 0 ? { backgroundColor: "white", margin: 0 } : { backgroundColor: "#F6F6F6", margin: 0 }}
        button
        onPress={() => props.navigation.navigate("Active")}
      >
          <Thumbnail large source={props.item.image} />
          <Body style={{marginLeft: 20, justifyContent: "center"}}>
            <Text style={{ fontSize: 20 }}>{props.item.title}</Text>
            <Text note>
              {props.item.stars} {props.item.reviews}
            </Text>

          </Body>
        <Right>
          <Icon name="ios-arrow-forward" />
        </Right>
      </CardItem>
    </>
  )
};

export default withNavigation(ActiveListItem);