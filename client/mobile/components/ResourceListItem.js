import React from 'react';
import {Card, CardItem, Left, Body, Right, Icon, Text, Thumbnail} from 'native-base';
import {withNavigation} from 'react-navigation';

const ResourceListItem = (props) => {
  const thumbnail = require("../assets/thumbnails/resources/resources-thumb-placeholder-01.png");
  return (
    <Card transparent>
      <CardItem
        button
        style={props.index % 2 === 0 ? {backgroundColor: "white", margin: 0} : {backgroundColor: "#F6F6F6", margin: 0}}
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