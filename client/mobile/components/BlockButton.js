import React from 'react';
import { StyleSheet } from 'react-native'
import { Button, Text, Icon, Left, Body, Right } from "native-base";
import { withNavigation } from 'react-navigation';

/**
 * BlockButton presents a single block sized button that spans across the entire
 * screen typically at the bottom of a resource page to initiate an action.
 * @param props
 * @pram props.icon - icon to display on button.
 * @param props.title - text to display on button
 * @param props.onPress - action to perform on click
 */
const BlockButton = (props) => {
  return (
    <Button
      block
      style={styles.button}
      iconRight
      onPress={props.onPress}
    >
      <Left style={{flex: 1}}></Left>
      <Body style={{flex: 4}}>
        <Text style={{color: "white", fontSize: 24}}>{props.title}</Text>
      </Body>
      <Right style={{flex: 1, marginRight: 10}}>
        <Icon style={{color: "white"}} name={props.icon}/>
      </Right>
    </Button>
  )
};

export default withNavigation(BlockButton)

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#B52126",
    margin: 10,
    marginTop: 30,
    paddingRight: 10,
    height: 48
  }
});