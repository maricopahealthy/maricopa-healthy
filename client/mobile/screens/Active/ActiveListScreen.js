// todo: ActiveListScreen
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import RecordTile from '../../components/RecordTile'

/**
 * Default Active view displaying list of Active.
 */
export default class ActiveListScreen extends React.Component {

  render() {
    return (
      <View>
        <FlatList
          data={[
            { key: 'Activity1', record: 'Activity 1' }
          ]}
          renderItem={({ item }) => <RecordTile item={item} type="Active" />}
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