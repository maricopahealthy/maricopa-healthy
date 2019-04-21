// todo: EventsFilterScreen
import React from 'react';
import { View, SectionList, StyleSheet } from 'react-native';
import { Container, Content, ListItem, Text, Button, Item, Input, Icon, Badge } from 'native-base';
import { Rating } from "react-native-ratings";
import Section from "../../utils/SectionsUtility";
import SectionHeader from "../../components/SectionHeader";

// Used for sample data ====================
const cityData = [
  {id: 0, city: 'Avondale'},
  {id: 1, city: 'Buckeye'},
  {id: 2, city: 'Carefree'},
  {id: 3, city: 'Cave Creek'},
  {id: 4, city: 'Chandler'},
];

const timeData = [
  {id: 0, time: 'Morning'},
  {id: 1, time: 'Afternoon'},
  {id: 2, time: 'Evening'},
];

const costData = [
  {id: 0, price: 'FREE'},
  {id: 1, price: 'Up to $4.00'},
  {id: 2, price: '$5.00 - 9.00'},
  {id: 3, price: '$10.00+'},
];

const sortByData = [
  {id: 0, category: 'Best Match'},
  {id: 1, category: 'Most Popular'},
  {id: 2, category: 'Near to Me'},
]
// Remove above ============================

/**
 * Display to add, modify, and delete filter categories for Event display results.
 */
export default class EventsFilterScreen extends React.Component {

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
                  onPress={() => {}}
              >
                <Text>Apply Filter</Text>
              </Button>
            </View>
          </Content>
        </Container>
    )
  }
}

/**
 * returns a unique id property for generating the necessary 'key' of a react list.
 * @param id
 * @returns {*}
 */
const extractKey = ({id}) => id;

// sections to display for Filter headers
const sections =[
    Section('City', cityData, ({item}) => {
      return (
          <Badge>
            <Text>{item.city}</Text>
          </Badge>
      )
    }),
    Section('Zip Code', [{id: 0}], ({item}) => {
      return (
          <ListItem></ListItem>
      )
    }),
    Section('Time of Day', timeData, ({item}) => {
      return (
          <Badge>
            <Text>{item.time}</Text>
          </Badge>
      )
    }),
    Section('Cost', costData, ({item}) => {
      return (
          <Badge>
            <Text>{item.price}</Text>
          </Badge>
      )
    }),
    Section('Rating', [{id: 0}], ({item}) => {
      return (
          <ListItem>
            <Rating readonly/>
          </ListItem>
      )
    }),
    Section('Sort By', sortByData, ({item}) => {
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