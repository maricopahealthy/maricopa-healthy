// todo: MarketsFilterScreen
import React from 'react';
import { SectionList, FlatList, View, StyleSheet } from 'react-native';
import { Container, Content, ListItem, Text, Button, Item, Input, Icon, Badge } from 'native-base';
import { Rating } from "react-native-ratings";
import Section from "../../utils/SectionsUtility";
import SectionHeader from "../../components/SectionHeader";

// Used for sample data ========================
const cityData = [
  { id: 0, city: 'Anthem' },
  { id: 1, city: 'Avondale' },
];

const paymentData = [
  { id: 0, city: 'Cash' },
  { id: 1, city: 'Check' },
];

const sortByData = [
  { id: 0, category: 'Best Match' },
  { id: 1, category: 'Most Popular' },
  { id: 2, category: 'Near to Me' }
]
// Remove above ================================

/**
 *  Display to add, modify, and delete filter categories for Recipes display results.
 */
export default class RecipesFilterScreen extends React.Component {

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
      <Badge>
        <Text>{item.city}</Text>
      </Badge>
    )
  }),
  Section('Zip Code', [{ id: 0 }], ({ item }) => {
    return (
      <Text>
        zip code
      </Text>
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
      <Badge>
        <Text>{item.category}</Text>
      </Badge>
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