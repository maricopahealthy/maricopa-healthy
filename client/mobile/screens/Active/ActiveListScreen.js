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
    console.log(this.props.active)
    return (
      <View>
        <FlatList
          data={this.props.active}
          renderItem={({ item, index }) => <ActiveListItem item={item} index={index} />}
        />
      </View>
    )
  }
};

const mapStateToProps = ({ active }) => {
  return {
    active: active.allIds.map(id => ({ key: id, ...active.byId[id] })),
    isFetching: active.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchActive: () => {
      dispatch(
        fetchActive()
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});