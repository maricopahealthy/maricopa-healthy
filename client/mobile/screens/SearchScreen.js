// todo: SearchScreen
// note: SearchResultsList component
import React from 'react';
import {
  View,
  Text, StyleSheet
} from "react-native";

/**
 * Component corresponds to the App level search functionality. Results are shown for all text matches across all resources.
 */
export default class SearchScreen extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Text>Search Screen</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});