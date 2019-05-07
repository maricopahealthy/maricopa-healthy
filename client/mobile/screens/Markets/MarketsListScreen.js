// todo: MarketsListScreen
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
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
            { key: 'Market1', title: 'Avondale Care1st Resource', address: '16838 E Ave of the Fountains Fountain Hills, AZ 85268', image: require("../../assets/thumbnails/markets/markets-thumb-placeholder-01.png") },
            { key: 'Market2', title: 'Our Harvest/Nuestra Cosec', address: '3806 N. Brown Rd Scottsdale, AZ 85251', image: require("../../assets/thumbnails/markets/markets-thumb-placeholder-02.png") },
            { key: 'Market3', title: 'Anthem Farmers Market', address: '41703 N. Gavilan Peak Pkwy Anthem, AZ 85086', image: require("../../assets/thumbnails/markets/markets-thumb-placeholder-03.png") },
            { key: 'Market4', title: 'Market Names Goes Here', address: '5757 N. Central Ave Phoenix, AZ 85013', image: require("../../assets/thumbnails/markets/markets-thumb-placeholder-04.png") },
  ]}
          renderItem={({ item }) => <RecordTile item={item} type="Markets" />}
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