import React from "react";
import { StyleSheet } from "react-native";
import { ListItem, Text, Icon, Body, Right } from 'native-base';

export default class SettingsListButton extends React.Component {
  state = {
    selected: false
  };

  render() {
    const border = this.props.borderTop ? { borderTopWidth: 1, borderTopColor: "#DDD" } : {};
    return (
      <ListItem icon button style={{ ...this.props.style, ...border, backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: "#DDD", marginLeft: 0  }}>
        <Body style={{paddingLeft: 15}}>
          <Text style={{ fontSize: 20 }}>{this.props.title}</Text>
        </Body>
        <Right style={{ borderBottomWidth: 0}}>
          <Text style={{fontSize: 20}}>{this.props.option}</Text>
          <Icon name="ios-arrow-forward" />
        </Right>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  
});