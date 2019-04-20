// todo: MarketsScreen
import React from 'react';
import { SectionList, View, StyleSheet } from 'react-native';
import { List, ListItem, Thumbnail, Text, Left, Body } from 'native-base';
import Section from '../../utils/SectionsUtility';
import SectionHeader from '../../components/SectionHeader';
import ActionButton from '../../components/ActionButton';
import SeasonalProduceTabs from '../../components/SeasonalProduceTabs';

const hours = [
  {
    id: 0,
    text: 'Wednesday'
  },
  {
    id: 1,
    text: 'Saturday'
  }
];

const seasonalProduce = [{
  data: [
    {
      id: 0,
      text: 'Spring',
      produce: ['Spring', 'Bananas']
    },
    {
      id: 1,
      text: 'Summer',
      produce: ['Summer', 'Bananas']
    },
    {
      id: 2,
      text: 'Autumn',
      produce: ['Autumn', 'Bananas']
    },
    {
      id: 3,
      text: 'Winter',
      produce: ['Winter', 'Bananas']
    }
  ]
}]

const paymentOptions = [
  {
    id: 0,
    text: 'Cash'
  },
  {
    id: 1,
    text: 'Check'
  },
  {
    id: 2,
    text: 'Visa'
  },
  {
    id: 3,
    text: 'Mastercard'
  }
]

const extractKey = ({ id }) => id

/**
 * Markets Screen for viewing individual market records.
 */
export default class MarketsScreen extends React.Component {
  sections = [
    Section('Hours', hours, ({ item }) => {
      return (
        <ListItem>
          <Text>{item.text}</Text>
        </ListItem>
      );
    }),
    Section('Seasonal Produce', seasonalProduce, ({ item }) => {
      return (
        <SeasonalProduceTabs item={item} />
      );
    }),
    Section('Payment Options', paymentOptions, ({ item }) => {
      return (
        <Text>{item.text}</Text>
      );
    }),
  ];

  render() {
    return (
      <View>
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
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
          {/* //todo Wire up action buttons */}
          <ActionButton title="more info" />
          <ActionButton title="directions" />
          <ActionButton title="meetup" />
        </View>
        <SectionList
          sections={this.sections}
          renderSectionHeader={SectionHeader}
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
