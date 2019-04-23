// todo: ParksScreen
import React from 'react';
import { SectionList, View, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, H3 } from 'native-base';
import Section from '../../utils/SectionsUtility';
import SectionHeader from '../../components/SectionHeader';
import ActionButton from '../../components/ActionButton';
import RecipeReviews from '../../components/RecipeReviewsComponent';

const hours = [
  {
    id: 0,
    day: 'Monday - Friday',
    month: '8:00 am - 10:00pm'
  },
  {
    id: 1,
    day: 'Saturday - Sunday',
    month: '7:00 am - 10:00 pm'
  }
];

const features = [
  { id: 0, feature: 'ADA accessibility' },
  { id: 1, feature: 'archery' },
  { id: 2, feature: 'baseball' },
  { id: 3, feature: 'basketball' },
  { id: 4, feature: 'batting cages' },
];

const extractKey = ({ id }) => id

/**
 * Parks Screen for viewing individual park records.
 */
export default class MarketsScreen extends React.Component {
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
                <Text>Park 1</Text>
                <Text note numberOfLines={1}>Park 1 Description</Text>
              </Body>
            </ListItem>
          </List>
          <View style={styles.buttons}>
            {/* //todo Wire up action buttons */}
            <ActionButton title="more info" />
            <ActionButton title="directions" />
            <ActionButton title="meetup" />
          </View>
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

const sections = [
  Section('Hours', hours, ({ item }) => {
    return (
      <ListItem>
        <View>
          <H3>{item.day}</H3>
          <Text>{item.month}</Text>
        </View>
      </ListItem>
    );
  }),
  Section('Features', features, ({ item }) => {
    return (
      <Text>
        {`\u2022 ${item.feature}`}
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
  buttons: {
    flexDirection: "row",
    justifyContent: 'space-between'
  }
});