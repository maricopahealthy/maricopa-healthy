import React from 'react';
import { StyleSheet } from 'react-native'
import { Button, Text } from "native-base";

export default class ActionButton extends React.Component {
  render() {
    return (
      <Button style={styles.button} full danger>
        <Text>{this.props.title}</Text>
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  button : {
    width: "33%"
  }
});
