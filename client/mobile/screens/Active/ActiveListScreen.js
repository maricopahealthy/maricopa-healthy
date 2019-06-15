// todo: ActiveListScreen
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ActiveListItem from '../../components/ActiveListItem';
import { connect } from 'react-redux'
import { fetchActive } from '../../actions/activeActions'
import { Spinner } from 'native-base';

/**
 * Default Active view displaying list of Active.
 */
class ActiveListScreen extends React.Component {

  componentDidMount() {
    this.props.fetchActive();
  }

  render() {
    if (this.props.isFetching) {
      return (
        <Spinner color='red' />
      )
    }

    const filteredActive = () => {
      const {active, filter} = this.props

      if(filter.apply) {
        let newActive = active;
        for (let type in filter) {
          if(filter[type].length) {
            newActive = newActive.filter(active => filter[type].includes(active[type]))
          }
        }
        return newActive;
      } else {
        return active
      }
    };

    return (
      <View>
        <FlatList
          data={filteredActive()}
          renderItem={({ item, index }) => <ActiveListItem item={item} index={index} />}
          keyExtractor={(item) => item.id.toString() }
        />
      </View>
    )
  }
}

const mapStateToProps = ({ active, filter }) => {
  return {
    active: active.allIds.map(id => ({ key: id, ...active.byId[id] })),
    isFetching: active.isFetching,
    filter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchActive: () => {
      dispatch(
        fetchActive()
      )
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});