import React from "react";
import { StyleSheet } from "react-native";
import { Text, Button } from "native-base";
import { connect } from 'react-redux'
import {updateFilter} from "../actions/filterActions";

class FilterButton extends React.Component {
  state = {
    selected: false
  };

  render() {
    const item = this.props.item;
    const active = this.props.filter[this.props.type].includes(item.text);
    return (
      <Button
        disabled={this.props.disabled}
        style={
          active
            ? { backgroundColor: "grey", ...styles.button }
            : { backgroundColor: "#E5E5EA", ...styles.button }
        }
        key={item.id}
        onPress={() => {
            this.props.update({type: this.props.type, value: item.text})
          }
        }
      >
        <Text style={{ color: "black" }}>{item.text}</Text>
      </Button>
    );
  }
}

const mapStateToProps = ({filter}) => {
  return {
    filter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    update: (filter) => {
      dispatch(
        updateFilter(filter)
      )
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton)

const styles = StyleSheet.create({
  button: {
    margin: 5,
    height: 30,
    fontSize: 20
  }
});
