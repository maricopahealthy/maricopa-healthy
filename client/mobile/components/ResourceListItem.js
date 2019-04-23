import React from 'react';
import { Card, CardItem, Left, Body, Right, Icon, Text, Thumbnail } from 'native-base';
import { withNavigation } from 'react-navigation';

const ResourceListItem = (props) => {
  return (
      <Card>
        <CardItem
            button
            onPress={() => {}}
        >
          <Left>
            <Thumbnail />
            <Body>
              <Text>Text</Text>
              <Text note>Text</Text>
            </Body>
          </Left>
          <Right>
            <Icon name="ios-arrow-forward" />
          </Right>
        </CardItem>
      </Card>
  )
};

export default withNavigation(ResourceListItem);