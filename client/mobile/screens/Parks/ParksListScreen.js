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
    console.log(this.props.parks)
    if (this.props.isFetching) {
      return (
        <Spinner color='red' />
      )
    }
    return (
      <View>
        <FlatList
          data={this.props.parks}
          renderItem={({ item, index }) => <RecordTile item={item} index={index} type="Parks" />}
        />
      </View>
    )
  }
};


const mapStateToProps = ({ parks }) => {
  return {
    parks: parks.allIds.map(id => ({ key: id, ...parks.byId[id] })),
    isFetching: parks.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchParks: () => {
      dispatch(
        fetchParks()
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParksListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});