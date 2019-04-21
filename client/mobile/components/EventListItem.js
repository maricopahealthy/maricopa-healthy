import React from 'react';
import { Card, CardItem, Left, Body, Right, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

const EventListItem = (props) => {
  return (
      <Card transparent>
        <CardItem
            button
            onPress={() => props.navigation.navigate("EventsRecord")}
        >
          <Left>
            <Body>
              <Text>Title</Text>
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