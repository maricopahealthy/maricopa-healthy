import React from 'react';
import { StyleSheet, View } from 'react-native'
import FilterButton from "./FilterButton"

export default class FilterButtons extends React.Component {
  render() {
    const buttons = this.props.item.item.data.map(item => {
      return (
        <FilterButton disabled={this.props.disabled} item={item} />
    )});

    return (
      <View style={styles.container}>
        {buttons}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row"
  }
});