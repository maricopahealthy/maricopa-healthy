// todo: SettingsTile
import React from 'react';
import { withNavigation } from 'react-navigation';
import {  ListItem, Icon, Left, Text, Right } from 'native-base';

/**
 * SettingsTile is used to display tiles of all settings options.
 */
class SettingsTile extends React.Component {
  render() {
    return (
      <ListItem onPress={() => this.props.navigation.navigate(this.props.route)}>
        <Left>
          <Icon style={{fontSize: 40, height: "100%", width: "12%"}} name={this.props.icon} />
          <Text style={{ marginLeft: 20, color: "black", fontSize: 25, fontWeight: "400" }} >{this.props.name}</Text>
        </Left>
        <Right>
          <Icon style={{ fontSize: 40 }} name="ios-arrow-forward" />
        </Right>
      </ListItem>
    );
  }
}

export default withNavigation(SettingsTile);