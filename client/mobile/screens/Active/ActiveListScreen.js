// todo: ActiveListScreen
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ActiveListItem from '../../components/ActiveListItem';

/**
 * Default Active view displaying list of Active.
 */
export default class ActiveListScreen extends React.Component {

  render() {
    return (
      <View>
        <FlatList
          data={[
            { key: 'Activity1', title: 'ADA Accessibility', stars: '4 stars', reviews: '37 Reviews', image: require("../../assets/thumbnails/active/active-ada-accessibility-icon.png") },
            { key: 'Activity2', title: 'Archery', stars: '3 stars', reviews: '26 Reviews', image: require("../../assets/thumbnails/active/active-archery-icon.png") },
            { key: 'Activity3', title: 'Baseball', stars: '4 stars', reviews: '37 Reviews', image: require("../../assets/thumbnails/active/active-baseball-icon.png") },
            { key: 'Activity4', title: 'Basketball', stars: '3 stars', reviews: '26 Reviews', image: require("../../assets/thumbnails/active/active-basketball-icon.png") },
            { key: 'Activity5', title: 'Batting Cages', stars: '4 stars', reviews: '37 Reviews', image: require("../../assets/thumbnails/active/active-batting-cages-icon.png") },
            { key: 'Activity6', title: 'Biking', stars: '3 stars', reviews: '26 Reviews', image: require("../../assets/thumbnails/active/active-biking-icon.png") },
            { key: 'Activity7', title: 'Boating', stars: '4 stars', reviews: '37 Reviews', image: require("../../assets/thumbnails/active/active-boating-icon.png") },
            { key: 'Activity8', title: 'Bocce Ball', stars: '3 stars', reviews: '26 Reviews', image: require("../../assets/thumbnails/active/active-bocce-ball-icon.png") },
          ]}
          renderItem={({ item, index }) => <ActiveListItem item={item} index={index} />}
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