// todo: RecipesRecordScreen
import React from 'react';
import { StyleSheet, SectionList } from 'react-native';
import { Container, Content, Card, CardItem, Left, Thumbnail, Body, Text, Right, Icon, ListItem } from "native-base";
import Section from '../../utils/SectionsUtility';

// sections to display for Recipe Record
const sections = [
  Section('Ingredients', [{id: 0, title: 'text'}], ({item}) => {
    return (<Text>Is this thing on?</Text>);
  }),
  Section('Directions', [], ({item}) => {
    return (<Text>Is this thing on?</Text>);
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

  /**
   * Renders the section title and adds header specific styling.
   */
  renderSectionHeader =({section}) => {
    return (
        <ListItem itemDivider>
          <Text>{section.title}</Text>
        </ListItem>
    )
  }

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
              renderSectionHeader={this.renderSectionHeader}
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