// todo: ParksFilterScreen
import React from 'react';
import { SectionList, View } from 'react-native';
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


const timeOfDay = [
  {
    data: [
      { id: 0, text: 'Morning' },
      { id: 1, text: 'Afternoon' },
      { id: 2, text: 'Evening' }
    ]
  }
];

const features = [
  {
    data: [
      { id: 0, text: 'ADA accessibility' },
      { id: 1, text: 'archery' },
      { id: 2, text: 'baseball' },
      { id: 3, text: 'basketball' },
      { id: 4, text: 'batting cages'},
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
 * Display to add, modify, and delete filter categories for Parks display results.
 */
export default class ParksFilterScreen extends React.Component {

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
    const { data } = item;
    return <FilterButtons data={data} />;
  }),
  Section('Zip Code', [{ id: 0 }], ({ item }) => {
    return (
      <Item regular>
        <Input placeholder='Enter Zip Code' />
      </Item>
    )
  }),
  Section('Hours', timeOfDay, ({ item }) => {
    const { data } = item;
    return <FilterButtons data={data} />;
  }),
  Section('Features', features, ({ item }) => {
    const { data } = item;
    return <FilterButtons data={data} />;
  }),
  Section('Rating', [{ id: 0 }], ({ item }) => {
    return (
      <ListItem>
        <Rating readonly />
      </ListItem>
    )
  }),
  Section('Sort By', sortByData, ({ item }) => {
    const { data } = item;
    return <FilterButtons data={data} />;
  }),
];