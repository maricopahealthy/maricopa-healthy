import React from "react";
import {updateFilter} from "../actions/filterActions";
import {connect} from "react-redux";
import {Input, Item} from "native-base";

class ZipCodeInput extends React.Component {
  render(){
    return(
      <Item regular>
        <Input onChangeText={(val) => this.props.update({type: "zipCode", value: val})} value={this.props.filter.zipCode} placeholder="Enter Zip Code" />
      </Item>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(ZipCodeInput)
