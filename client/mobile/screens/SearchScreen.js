// todo: SearchScreen
// note: SearchResultsList component
import React from 'react';
import { View, FlatList } from 'react-native';
import { Container } from 'native-base';
import RecordTile from '../components/RecordTile';

const results = [
  { key: 'Market1', title: 'Avondale Care1st Resource', address: '16838 E Ave of the Fountains Fountain Hills, AZ 85268', image: require("../assets/thumbnails/markets/markets-thumb-placeholder-01.png") },
  { key: 'Market2', title: 'Our Harvest/Nuestra Cosec', address: '3806 N. Brown Rd Scottsdale, AZ 85251', image: require("../assets/thumbnails/markets/markets-thumb-placeholder-02.png") },
  { key: 'Market3', title: 'Anthem Farmers Market', address: '41703 N. Gavilan Peak Pkwy Anthem, AZ 85086', image: require("../assets/thumbnails/markets/markets-thumb-placeholder-03.png") },
  { key: 'Market4', title: 'Market Names Goes Here', address: '5757 N. Central Ave Phoenix, AZ 85013', image: require("../assets/thumbnails/markets/markets-thumb-placeholder-04.png") },
]

/**
 * Component corresponds to the App level search functionality. Results are shown for all text matches across all resources.
 */
export default class SearchScreen extends React.Component {

  render() {
    return (
      <Container>
        <View>
          {/* //todo Make search results dynamic */}
          {/* //todo Make search results bring you to individual record */}
          <FlatList
            data={results}
            renderItem={({ item, index }) => <RecordTile index={index} item={item} type="Markets" />}
          />
        </View>
      </Container>
    )
  }
}