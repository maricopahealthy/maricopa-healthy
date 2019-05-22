import React from "react";
import { StyleSheet } from "react-native";
import { ListItem, Text, Left, Right, Switch } from 'native-base';

export default class SettingsSlider extends React.Component {
  state = {
    selected: false
  };

  render() {
    const border = this.props.borderTop ? { borderTopWidth: 1, borderTopColor: "#DDD"} : {};
    return (
      <ListItem noIndent style={{ ...this.props.style, ...border, backgroundColor: "white"}}>
        <Left>
          <Text style={{fontSize: 20}}>{this.props.title}</Text>
        </Left>
        <Right>
          <Switch 
            onValueChange={() =>
              this.setState(prevState => {
                return { selected: !prevState.selected };
            })} 
            value={this.state.selected} 
          />
        </Right>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  
});