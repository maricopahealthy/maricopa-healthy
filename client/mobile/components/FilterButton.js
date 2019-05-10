import React from 'react';
import { StyleSheet } from 'react-native'
import { Text, Button, } from 'native-base';

export default class FilterButton extends React.Component {
  state = {
    selected: false
  }

  render() {
    const active = this.state.selected;
    const item = this.props.item
    return (
      <Button disabled={this.props.disabled} style={active ? { backgroundColor: "grey", ...styles.button } : { backgroundColor: "#E5E5EA", ...styles.button }}
        key={item.id}
        onPress={() => this.setState((prevState) => {
          return { selected: !prevState.selected }
        })}
      >
        <Text style={{ color: "black" }}>
          {item.text}
        </Text>
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
    height: 30,
    fontSize: 20
  }
});