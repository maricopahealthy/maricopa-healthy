import React from 'react';
import { Card, CardItem, Left, Body, Right, Icon, Text, Thumbnail } from 'native-base';
import { withNavigation } from 'react-navigation';

const ResourceListItem = (props) => {
  return (
      <Card transparent>
        <CardItem
            button
            onPress={() => props.navigation.navigate("ResourcesRecord")}
        >
          <Left>
            <Thumbnail source={props.item.image} />
            {/* Resource Description */}
            <Body>
              <Text>{props.item.title}</Text>
              <Text note>{props.item.description}</Text>
            </Body>
          </Left>
          {/* Navigational Arrow */}
          <Right>
            <Icon name="ios-arrow-forward" />
          </Right>
        </CardItem>
      </Card>
  )
};

export default withNavigation(ResourceListItem);