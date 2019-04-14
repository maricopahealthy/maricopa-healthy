// todo: MarketsListScreen
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RecordTile from '../../components/RecordTile'

/**
 * Markets view displaying list of markets.
 */
export default class MarketsListScreen extends React.Component {

  render() {
    return (
      <View>
        <FlatList
          data={[
            { key: 'Market1', record: 'Market 1' }
          ]}
          renderItem={({ item }) => <RecordTile item={item} />}
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