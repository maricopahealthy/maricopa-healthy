// todo: ParksListScreen
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import RecordTile from '../../components/RecordTile'
import { connect } from 'react-redux'
import { fetchParks } from '../../actions/parksActions'
import { Spinner } from 'native-base';

/**
 * Parks view displaying list of parks.
 */
class ParksListScreen extends React.Component {

  componentDidMount() {
    this.props.fetchParks();
  }

  render() {
    if (this.props.isFetching) {
      return (
        <Spinner color='red' />
      )
    }

    const filteredParks = () => {
      const {parks, filter} = this.props

      if(filter.apply) {
        let newParks = parks;
        for (let type in filter) {
          if(filter[type].length) {
            newParks = newParks.filter(park => filter[type].includes(park[type]))
          }
        }
        return newParks;
      } else {
        return parks
      }
    };

    return (
      <View>
        <FlatList
          data={filteredParks()}
          renderItem={({ item, index }) => <RecordTile item={item} index={index} type="Parks" />}
          keyExtractor={(item) => item.id.toString() }
        />
      </View>
    )
  }
}


const mapStateToProps = ({ parks, filter }) => {
  return {
    parks: parks.allIds.map(id => ({ key: id, ...parks.byId[id] })),
    isFetching: parks.isFetching,
    filter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchParks: () => {
      dispatch(
        fetchParks()
      )
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ParksListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});