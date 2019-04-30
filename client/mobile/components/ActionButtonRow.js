import React from 'react';
import { StyleSheet, View } from 'react-native'
import ActionButton from "./ActionButton"

export default class ActionButtonRow extends React.Component {
  render() {
    return (
      <View style={styles.buttons}>
        {/* //todo Wire up action buttons */}
        <ActionButton title="more info" />
        <ActionButton title="directions" />
        <ActionButton title="meetup" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: 'space-between'
  }
});