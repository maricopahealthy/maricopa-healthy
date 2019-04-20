// todo: MarketsScreen
import React from 'react';
import { SectionList, View, StyleSheet } from 'react-native';
import { Content, List, ListItem, Thumbnail, Text, Left, Body } from 'native-base';
import SectionHeader from '../../components/SectionHeader';
import ActionButton from '../../components/ActionButton';


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
  },
  {
    id: 2,
    title: 'Payment Options',
    data: [
      { id: 3, text: 'Cash' },
      { id: 4, text: 'Check' },
      { id: 5, text: 'Visa' },
      { id: 6, text: 'Mastercard' },
    ]
  },
  {
    id: 3,
    title: 'Reviews',
    data: [
      { id: 7, text: 'Good Selection' }
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
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'URL' }} />
              </Left>
              <Body>
                <Text>Market 1</Text>
                <Text note numberOfLines={1}>Market 1 Description</Text>
              </Body>
            </ListItem>
          </List>
        <View style={{ flexDirection: "row", justifyContent: 'space-between'}}>         
          <ActionButton title="more info" />
          <ActionButton title="directions" />
          <ActionButton title="meetup"/>
        </View>
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