// todo: RecordTile
import React from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card, CardItem, Left, Body, Right, Icon, Text, Thumbnail } from 'native-base';

/**
 * RecordTile is used for previewing different records.
 */
const RecordTile = (props) => {
  return (
    <Card transparent>
      <CardItem
        button
        onPress={() => props.navigation.navigate(props.type)}
      >
          <Thumbnail large source={props.item.image} />
        <Body style={{justifyContent: "center", marginLeft: 15}}>
          <Text>{props.item.title}</Text>
          <Text note>{props.item.address}</Text>
        </Body>
        <Icon style={{ color: "#8E8E93"}} name="ios-arrow-forward" />
      </CardItem>
    </Card>
  );
}

export default withNavigation(RecordTile);

const styles = StyleSheet.create({

})