import React from 'react';
import { StyleSheet, View } from 'react-native'
import ActionButton from "./ActionButton"

/**
 * ActionButtonRow is a presentational component for the action button row present
 * in the Record Screen of most resources.
 * @param {Object} props - collection of buttons to present.
 * @param {Object} props.one - first button, include name and icon props.
 * @param {Object} props.two - second button, include name and icon props.
 * @param {Object} props.three - button the third, include name and icon props.
 */
const ActionButtonRow = (props) => {
  const { one, two, three } = props;
  return (
    <View style={styles.buttons}>
      {/* //todo Wire up action buttons */}
      <ActionButton title={one.name} icon={one.icon} />
      <ActionButton title={two.name} icon={two.icon} />
      <ActionButton title={three.name} icon={three.icon} />
    </View>
  )
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: 'space-between'
  }
});

export default ActionButtonRow