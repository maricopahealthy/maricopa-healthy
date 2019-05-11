import React from 'react';
import { StyleSheet, View } from 'react-native'
import { Text} from "native-base";

const AboutPageSection = ({title, text}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.header}>{title}</Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    margin: 15
  },
  header: {
    fontWeight: "bold"
  }
});

export default AboutPageSection