// todo: ActiveScreen
import React from 'react';
import { SectionList, View, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, H3 } from 'native-base';
import Section from '../../utils/SectionsUtility';
import SectionHeader from '../../components/SectionHeader';
import RecipeReviews from '../../components/RecipeReviewsComponent';
import ActionButtonRow from '../../components/ActionButtonRow';

/**
 * Active Screen for viewing individual Active records.
 */
export default class ActiveScreen extends React.Component {

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'URL' }} />
              </Left>
              <Body>
                <Text>Activity 1</Text>
              </Body>
            </ListItem>
          </List>
          <ActionButtonRow />
          <SectionList
            sections={sections}
            renderSectionHeader={SectionHeader}
            keyExtractor={extractKey}
          />
        </Content>
      </Container>
    )
  }
}

const howto = [
  {
    id: 0,
    description: 'Description and history of activity goes here followed by a map of parks where you can participate in the activity. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

const extractKey = ({ id }) => id

const sections = [
  Section('How To', howto, ({ item }) => {
    return (
      <Text>
        {item.description}
      </Text>
    );
  }),
  Section('Find a Place', [{id: 0}], ({ item }) => {
    return (
      <Text>
      {/* // todo Add find a place component */}
        Find a place placeholder
      </Text>
    );
  }),
  Section('Reviews', [{ id: 0 }], ({ item }) => {
    return (
      <ListItem>
        <RecipeReviews />
      </ListItem>
    );
  })
];

const styles = StyleSheet.create({
  
});