import React from 'react';
import { Card, CardItem, Left, Body, Right, Icon, Text, Thumbnail } from 'native-base';
import { withNavigation } from 'react-navigation';

const EventListItem = (props) => {
  return (
      <Card transparent>
        <CardItem
            button
            onPress={() => props.navigation.navigate("EventsRecord")}
        >
          <Left>
            <Thumbnail />
            <Body>
              <Text>{props.item.title}</Text>
              <Text note>
                {props.item.time} {props.item.price}
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

export default withNavigation(EventListItem);