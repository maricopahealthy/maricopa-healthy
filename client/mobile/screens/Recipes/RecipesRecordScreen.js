// todo: RecipesRecordScreen
import React from 'react';
import { StyleSheet, SectionList } from 'react-native';
import { Container, Content, Card, CardItem, Left, Thumbnail, Body, Text, Right, Icon, ListItem } from "native-base";
import Section from '../../utils/SectionsUtility';
import SectionHeader from '../../components/SectionHeader';

// Used for sample data ==================================
const ingredientData = [
  {
    id: 0,
    instruction: '4 cups shredded apples with peel'
  },
  {
    id: 1,
    instruction: '2 2/3 cup quick rolled oats',
  },
  {
    id: 2,
    instruction: '2/3 cup finely chopped pecans',
  },
  {
    id: 3,
    instruction: '2 eggs, beaten',
  }
];

const directionsData = [
  {
    id: 0,
    direction: 'Wash hands with soap and warm water. Wash fresh produce before preparing.',
  },
  {
    id: 1,
    direction: 'Preheat oven to 375 degrees. Spray 9x9 pan with non-stick spray. Set aside.',
  },
  {
    id: 2,
    direction: 'Shred apples on a large-hole grater and place in a large mixing bowl. Discard core and seeds.',
  },
  {
    id: 3,
    direction: 'Combine oats, pecans, brown sugar, cinnamon, baking powder, baking soda, and salt in a large mixing bowl. Mix well.',
  },
];

// remove above =============================================

// sections to display for Recipe Record
const sections = [
  Section('Ingredients', ingredientData, ({item}) => {
    return (
        <ListItem>
          <Text>{item.instruction}</Text>
        </ListItem>
    );
  }),
  Section('Directions', directionsData, ({item, index}) => {
    return (
        <ListItem>
          <Text>{index + 1}. {item.direction}</Text>
        </ListItem>
    );
  }),
  Section('Nutrition Facts (Per Serving)', [], ({item}) => {
    return (<Text>Is this thing on?</Text>);
  }),
  Section('Reviews', [], ({item}) => {
    return (<Text>Is this thing on?</Text>);
  })
];

/**
 * returns a unique id property for generating the necessary 'key' of a react list.
 * @param id
 * @returns {*}
 */
const extractKey = ({id}) => id;

/**
 * RecipesRecord displays a detailed Screen for a single recipe from the RecipeList.
 */
export default class RecipesRecordScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content>
            <Card transparent>
              <CardItem>
                <Left>
                  <Thumbnail />
                  <Body>
                    <Text>Apple Pecan Bars</Text>
                  </Body>
                </Left>
                <Right>
                  <Icon name='heart-empty' />
                </Right>
              </CardItem>
            </Card>
          {/* Section information */}
          <SectionList
              sections={sections}
              renderSectionHeader={SectionHeader}
              keyExtractor={extractKey}
          />
          </Content>
        </Container>
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