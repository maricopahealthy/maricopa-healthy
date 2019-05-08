// todo: MarketsFilterScreen
import React from 'react';
import { SectionList, View, StyleSheet } from 'react-native';
import { Container, Content, ListItem, Text, Button, Input, Item } from 'native-base';
import { Rating } from "react-native-ratings";
import Section from "../../utils/SectionsUtility";
import SectionHeader from "../../components/SectionHeader";
import FilterButtons from "../../components/FilterButtons";

// Used for sample data ========================
const cityData = [
  {
    data: [
      { id: 0, text: 'Anthem' },
      { id: 1, text: 'Avondale' },
      { id: 2, text: 'Buckeye' },
      { id: 3, text: 'Carefree' },
      { id: 4, text: 'Chandler' },
      { id: 5, text: 'Fountain Hills' },
      { id: 6, text: 'Glendale' },
      { id: 7, text: 'Goodyear' },
    ]
  }
];

const dayOfWeek = [
  {
    data: [
      { id: 0, text: 'Sunday' },
      { id: 1, text: 'Monday' },
      { id: 2, text: 'Tuesday' },
      { id: 3, text: 'Wednesday' },
      { id: 4, text: 'Thursday' },
      { id: 5, text: 'Friday' },
      { id: 6, text: 'Saturday' },
    ]
  }
]

const timeOfDay = [
  {
    data: [
      { id: 0, text: 'Morning' },
      { id: 1, text: 'Midday' },
      { id: 2, text: 'Afternoon' },
      { id: 3, text: 'Evening' }
    ]
  }
]

const paymentData = [
  {
    data: [
      { id: 0, text: 'Cash' },
      { id: 1, text: 'Check' },
      { id: 2, text: 'Credit' },
      { id: 3, text: 'SNAP' },
      { id: 4, text: 'FMNP' },
      { id: 5, text: 'SNAP Matching' },
    ]
  }
];

const sortByData = [
  {
    data: [
      { id: 0, text: 'Best Match' },
      { id: 1, text: 'Most Popular' },
      { id: 2, text: 'Near to Me' }
    ]
  }
];
// Remove above ================================

/**
 *  Display to add, modify, and delete filter categories for Markets display results.
 */
export default class MarketsFilterScreen extends React.Component {

  render() {
    return (
      <Container>
        <Content padder>
          <SectionList
            sections={sections}
            renderSectionHeader={SectionHeader}
            keyExtractor={extractKey}
          />
          <View>
            <Button
              block
              danger
              onPress={() => { }}
            >
              <Text>Apply Filter</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
};

/**
 * returns a unique id property for generating the necessary 'key' of a react list.
 * @param id
 * @returns {*}
 */
const extractKey = ({ id }) => id;

// sections to display for Filter headers
const sections = [
  Section('City', cityData, ({ item }) => {
    return (
      <FilterButtons item={{item}} />
    )
  }),
  Section('Zip Code', [{ id: 0 }], ({ item }) => {
    return (
      <Item regular>
        <Input placeholder='Enter Zip Code' />
      </Item>
    )
  }),
  Section('Day of Week', dayOfWeek, ({ item }) => {
    return (
      <FilterButtons item={{ item }} />
    )
  }),
  Section('Time of Day', timeOfDay, ({ item }) => {
    return (
      <FilterButtons item={{ item }} />
    )
  }),
  Section('Payment Options', paymentData, ({ item }) => {
    return (
      <FilterButtons item={{item}} />
    )
  }),
  Section('Rating', [{ id: 0 }], ({ item }) => {
    return (
      <ListItem>
        <Rating readonly />
      </ListItem>
    )
  }),
  Section('Sort By', sortByData, ({ item }) => {
    return (
      <FilterButtons item={{ item }} />
    )
  }),
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});