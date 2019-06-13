import React from "react";
import { StyleSheet } from "react-native";
import { Text, Button } from "native-base";
import { connect } from 'react-redux'
import {resetFilter} from "../actions/filterActions";

class FilterButton extends React.Component {
  state = {
    selected: false
  };

  static getDerivedStateFromProps(props, state) {
     if(props.isResetting) {
       return {
         selected: false
       }
     } else {
       return {
         selected: state.selected
       }
     }
   }

  render() {
    const active = this.state.selected;
    const item = this.props.item;
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
            this.props.resetOff();
            this.setState(prevState => {
              return {selected: !prevState.selected};
            })

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
    isResetting: filter.isResetting
  }
};

const mapDispatchToProps = dispatch => {
  return {
    resetOff: () => {
      dispatch(
        resetFilter(false)
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
