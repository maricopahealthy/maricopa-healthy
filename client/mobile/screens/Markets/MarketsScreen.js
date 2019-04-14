// todo: MarketsScreen
import React from 'react';
import { SectionList, View, Text, StyleSheet } from 'react-native';
import { Container, Content, Button } from 'native-base'
import SectionHeader from '../../components/SectionHeader';
import ActionButton from '../../components/ActionButton';
import RecordTile from '../../components/RecordTile';

const sections = [
  {
    id: 0,
    title: 'Hours',
    data: [
      { id: 0, text: 'Wednesday' },
      { id: 1, text: 'Saturday' },
    ]
  },
  {
    id: 1,
    title: 'Seasonal Produce',
    data: [
      { id: 2, text: 'Spring' },
      { id: 3, text: 'Summer' },
    ]
  }
]

const extractKey = ({ id }) => id

/**
 * Markets Screen for viewing individual market records.
 */
export default class MarketsScreen extends React.Component {

  renderItem = ({ item }) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }

  renderSectionHeader = ({ section }) => {
    return (
      <SectionHeader title={section.title} />
    )
  }


  render() {
    return (
      <View>
        <Text>Markets Screen</Text>
        <RecordTile item={{ key: 'Market1', record: 'Market 1' }} />
        <ActionButton title="more info" />
        <ActionButton title="directions" />
        <ActionButton title="meetup"/>
        <SectionList
          sections={sections}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={extractKey}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  }
});