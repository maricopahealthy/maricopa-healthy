import React from 'react';
import { Body, Card, CardItem, Icon, Left, ListItem, Right, Text, Thumbnail } from "native-base";
import { withNavigation } from 'react-navigation';

/**
 * ActiveListItem is a presentational component for the Actives records.
 */
const ActiveListItem = (props) => {
  return (
    <Card transparent>
      <CardItem
        button
        onPress={() => props.navigation.navigate("Active")}
      >
        <Left>
          <Thumbnail large source={props.item.image} />
          <Body>
            <Text>{props.item.title}</Text>
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
  )
};

export default withNavigation(ActiveListItem);