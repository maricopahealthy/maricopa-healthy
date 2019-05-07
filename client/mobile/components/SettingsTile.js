// todo: SettingsTile
import React from 'react';
import { withNavigation } from 'react-navigation';
import {  ListItem, Icon, Left, H3, Right } from 'native-base';

/**
 * SettingsTile is used to display tiles of all settings options.
 */
class SettingsTile extends React.Component {
  render() {
    return (
      <ListItem onPress={() => this.props.navigation.navigate(this.props.route)}>
        <Left>
          <Icon name={this.props.icon} />
          <H3>{this.props.name}</H3>
        </Left>
        <Right>
          <Icon name="ios-arrow-forward" />
        </Right>
      </ListItem>
    );
  }
}

export default withNavigation(SettingsTile);