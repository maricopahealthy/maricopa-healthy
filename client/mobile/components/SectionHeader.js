import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Text } from 'native-base';

/**
 * Renders the section title and adds header specific styling.
 */
const SectionHeader =({section}) => {
  return (
      <ListItem itemDivider style={{backgroundColor: "#E5E5EA"}}>
        <Text style={styles.header}>{section.title}</Text>
      </ListItem>
  )
};

export default SectionHeader;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "600",
  },
});