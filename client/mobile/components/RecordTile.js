import React from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card, CardItem, Left, Body, Right, Icon, Text, Thumbnail } from 'native-base';

/**
 * RecordTile is used for previewing different records.
 */
const RecordTile = (props) => {
  return (
    <>
      <CardItem
        button
        style={props.index % 2 === 0 ? { backgroundColor: "white", margin: 0 } : { backgroundColor: "#F6F6F6", margin: 0 }}
        onPress={() => props.navigation.navigate(props.type, {id: props.item.id})}
      >
          <Thumbnail large source={props.item.thumbnail} />
        <Body style={{ justifyContent: "center", marginLeft: 15 }}>
          <Text>{props.item.name}</Text>
          <Text note>{props.item.street_address}</Text>
        </Body>
        <Icon style={{ color: "#8E8E93"}} name="ios-arrow-forward" />
      </CardItem>
    </>
  );
};

export default withNavigation(RecordTile);

const styles = StyleSheet.create({

});