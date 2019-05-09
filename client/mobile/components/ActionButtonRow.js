import React from 'react';
import { StyleSheet, View } from 'react-native'
import ActionButton from "./ActionButton"

const ActionButtonRow = ({one, two, three}) => {
  return (
    <View style={styles.buttons}>
      {/* //todo Wire up action buttons */}
      <ActionButton title={one.name} icon={one.icon} />
      <ActionButton title={two.name} icon={two.icon} />
      <ActionButton title={three.name} icon={three.icon} />
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: 'space-between'
  }
});

export default ActionButtonRow