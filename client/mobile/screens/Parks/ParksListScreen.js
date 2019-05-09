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
            { key: 'Park1', title: 'Cesar Chavez Park', address: '7858 S. 35th Ave Laveen Village, AZ 85339', image: require("../../assets/thumbnails/parks/parks-thumb-placeholder-01.png") },
            { key: 'Park2', title: 'Discovery District Park', address: '2214 E. Pecos Rd Chandler, AZ 85225', image: require("../../assets/thumbnails/parks/parks-thumb-placeholder-02.png") },
            { key: 'Park3', title: 'Lake Pleasant Regional Park', address: '41835 N. Castle Hot Springs Morristown, AZ 85342', image: require("../../assets/thumbnails/parks/parks-thumb-placeholder-03.png") },
            { key: 'Park4', title: 'Park Name Goes Here', address: '2214 E. Pecos Rd Chandler, AZ 85225', image: require("../../assets/thumbnails/parks/parks-thumb-placeholder-04.png") },
            { key: 'Park5', title: 'Park Name Goes Here', address: '7858 S. 35th Ave Laveen Village, AZ 85339', image: require("../../assets/thumbnails/parks/parks-thumb-placeholder-05.png") },
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