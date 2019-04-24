// todo: ParksListScreen
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import RecordTile from '../../components/RecordTile'

/**
 * Parks view displaying list of parks.
 */
export default class ParksListScreen extends React.Component {

  render() {
    return (
      <View>
        <FlatList
          data={[
            { key: 'Park1', record: 'Park 1' }
          ]}
          renderItem={({ item }) => <RecordTile item={item} type="Parks" />}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});