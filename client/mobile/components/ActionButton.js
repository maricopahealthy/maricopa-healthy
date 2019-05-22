import React from 'react';
import { StyleSheet } from 'react-native'
import { Button, Text, Icon } from "native-base";

const ActionButton = (props) => {
  return (
    <Button style={styles.button} full iconLeft>
      <Icon name={props.icon} />
      <Text>{props.title}</Text>
    </Button>
  )
}

const styles = StyleSheet.create({
  button : {
    width: "33%",
    backgroundColor: "#B52126",
    textAlign: "center"
  }
});

export default ActionButton