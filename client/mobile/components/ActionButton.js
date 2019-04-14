import React from 'react';
import { StyleSheet } from 'react-native'
import { Button, Text } from "native-base";

export default class ActionButton extends React.Component {
  render() {
    return (
      <Button danger>
        <Text>{this.props.title}</Text>
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  
});
