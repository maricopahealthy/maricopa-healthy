// todo: RecipesFilterScreen
import React from 'react';
import { SectionList, View, StyleSheet } from 'react-native';
import { Container, Content, ListItem, Text, Button, Item, Input, Icon } from 'native-base';
import Section from "../../utils/SectionsUtility";
import SectionHeader from "../../components/SectionHeader";

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
                  onPress={() => {}}
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
const extractKey = ({id}) => id;

// sections to display for Filter headers
const sections= [
    Section('Ingredient', [{id: 0}], ({item}) => {
      return (
          <ListItem>
            <Item regular>
              <Icon name='search'/>
              <Input placeholder='Enter ingredient name'/>
            </Item>
          </ListItem>
      )
    }),
    Section('Meal Type', [{id: 0}], ({item}) => {
      return (
          <ListItem>
            <Text>Test</Text>
          </ListItem>
      )
    }),
    Section('Rating', [{id: 0}], ({item}) => {
      return (
          <ListItem>
            <Text>Test</Text>
          </ListItem>
      )
    }),
    Section('Sort By', [{id: 0}], ({item}) => {
      return (
          <ListItem>
            <Text>Test</Text>
          </ListItem>
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