import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Text } from 'native-base';

/**
 * Renders the section title and adds header specific styling.
 */
const SectionHeader =({section}) => {
  return (
      <ListItem itemDivider>
        <Text>{section.title}</Text>
      </ListItem>
  )
};

export default SectionHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#E5E5EA",
    fontSize: 20,
    padding: "2%",
  },
});