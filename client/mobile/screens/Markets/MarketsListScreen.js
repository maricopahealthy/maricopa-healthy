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

    const filteredMarkets = () => {
      const {markets, filter} = this.props

      if(filter.apply) {
        let newMarkets = markets;
        for (let type in filter) {
          if(filter[type].length) {
            newMarkets = newMarkets.filter(market => filter[type].includes(market[type]))
          }
        }
        return newMarkets;
      } else {
        return markets
      }
    };

    return (
        <View>
          <FlatList
              data={filteredMarkets()}
              renderItem={({item, index}) => <RecordTile item={item} index={index} type="Markets"/>}
              keyExtractor={(item) => item.id.toString() }
          />
        </View>
    )
  }
}

// map connect

const mapStateToProps = ({markets, filter}) => {
  return {
    markets: markets.allIds.map(id => ({ key: id, ...markets.byId[id] })),
    isFetching: markets.isFetching,
    filter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMarkets: () => {
      dispatch (
        fetchMarkets()
      )
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketsListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});