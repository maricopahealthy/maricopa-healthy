import React from "react";
import {StyleSheet, View} from "react-native";
import FilterButton from "./FilterButton";

const FilterButtons = ({data, type, disabled}) => {
  const buttons = data.map((item, index) => {
    return <FilterButton type={type} key={index} disabled={disabled} item={item}/>;
  });

  return <View style={styles.container}>{buttons}</View>;
};

export default FilterButtons;

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row"
  }
});
