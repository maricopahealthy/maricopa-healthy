import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default class SectionHeader extends React.Component {
  render() {
    return (
      <Text style={styles.header}>
        {this.props.title}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#E5E5EA",
    fontSize: 20,
    padding: "2%"
    

  }
});