// todo: MarketsListScreen
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import RecordTile from '../../components/RecordTile'
import { connect } from 'react-redux'
import { fetchMarkets } from '../../actions/marketsActions'
import { Spinner } from 'native-base';

/**
 * Markets view displaying list of markets.
 */
class MarketsListScreen extends React.Component {

  componentDidMount() {
    this.props.fetchMarkets();
  }

  render() {
    if(this.props.isFetching) {
      return (
        <Spinner color='red'/>
      )
    }
    return (
        <View>
          <FlatList
              data={this.props.markets}
              renderItem={({item, index}) => <RecordTile item={item} index={index} type="Markets"/>}
          />
        </View>
    )
  }
};

// map connect

const mapStateToProps = ({markets}) => {
  return {
    markets: markets.allIds.map(id => ({ key: id, ...markets.byId[id] })),
    isFetching: markets.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMarkets: () => {
      dispatch (
        fetchMarkets()
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketsListScreen);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});