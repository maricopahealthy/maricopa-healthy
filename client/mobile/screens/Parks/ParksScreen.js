// todo: ParksScreen
import React from 'react';
import { SectionList, View, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, ListItem, Thumbnail, Text, Left, Body, Right, H3, Icon } from 'native-base';
import Section from '../../utils/SectionsUtility';
import SectionHeader from '../../components/SectionHeader';
import RecipeReviews from '../../components/RecipeReviewsComponent';
import ActionButtonRow from '../../components/ActionButtonRow';

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

const actionButtons = {
  one: {
    name: "more info",
    icon: "ios-alert"
  },
  two: {
    name: "directions",
    icon: "ios-car"
  },
  three: {
    name: "meetup",
    icon: "ios-people"
  },
}

/**
 * Parks Screen for viewing individual park records.
 */
export default class MarketsScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Card transparent>
            <CardItem>
              <Left>
                <Thumbnail
                  large
                  source={require("../../assets/thumbnails/parks/parks-thumb-placeholder-01.png")}
                />
                <Body>
                  <Text>Park Name Goes Here</Text>
                </Body>
              </Left>
              <Right>
                <Icon name='heart-empty' />
              </Right>
            </CardItem>
          </Card>
          <ActionButtonRow {...actionButtons} />
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
      <Text style={{marginLeft: 10}}>
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
  
});