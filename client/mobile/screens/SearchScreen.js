// todo: SearchScreen
// note: SearchResultsList component
import React from 'react';
import { View, FlatList } from 'react-native';
import { Container, Text } from 'native-base';
import RecordTile from '../components/RecordTile';
import {connect} from "react-redux";

const results = [
  { id: 1, name: 'Avondale Care1st Resource', street_address: '16838 E Ave of the Fountains Fountain Hills, AZ 85268', thumbnail: require("../assets/thumbnails/markets/markets-thumb-placeholder-01.png") },
  { id: 2, name: 'Our Harvest/Nuestra Cosec', street_address: '3806 N. Brown Rd Scottsdale, AZ 85251', thumbnail: require("../assets/thumbnails/markets/markets-thumb-placeholder-02.png") },
  { id: 3, name: 'Anthem Farmers Market', street_address: '41703 N. Gavilan Peak Pkwy Anthem, AZ 85086', thumbnail: require("../assets/thumbnails/markets/markets-thumb-placeholder-03.png") },
  { id: 4, name: 'Market Names Goes Here', street_address: '5757 N. Central Ave Phoenix, AZ 85013', thumbnail: require("../assets/thumbnails/markets/markets-thumb-placeholder-04.png") },
];

/**
 * Component corresponds to the App level search functionality. Results are shown for all text matches across all resources.
 */
class SearchScreen extends React.Component {

  render() {
    return (
      <Container>
        <View>
          {/* //todo Make search results dynamic */}
          {this.props.search.length > 3 ?
            <FlatList
            data={results}
            renderItem={({ item, index }) => <RecordTile index={index} item={item} type="Markets"
            keyExtractor={(item) => item.id.toString() }
            />}
          /> : <Text>Search for results</Text>}
        </View>
      </Container>
    )
  }
}

const mapStateToProps = ({search}) => {
  return {
    search: search.search
  }
};

export default connect(mapStateToProps)(SearchScreen)