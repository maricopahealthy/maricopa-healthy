import React from 'react';
import { StyleSheet } from 'react-native'
import { Button, Text, Icon } from "native-base";

/**
 * ActionButton presents a single button component, used as part of the
 * ActionButtonRow component.
 * @param props
 * @param props.icon - icon to display on button.
 * @param props.title - text to display on button.
 */
const ActionButton = (props) => {
  return (
    <Button style={styles.button} full iconLeft>
      <Icon name={props.icon}/>
      <Text>{props.title}</Text>
    </Button>
  )
};

const styles = StyleSheet.create({
  button : {
    width: "33%",
    backgroundColor: "#B52126",
    textAlign: "center"
  }
});

export default ActionButton