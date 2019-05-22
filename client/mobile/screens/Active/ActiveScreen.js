// todo: ActiveScreen
import React from 'react';
import { SectionList } from 'react-native';
import { Container, Content, Card, CardItem, ListItem, Thumbnail, Text, Left, Body, Right, H3, Icon } from 'native-base';
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
          <Card transparent>
            <CardItem>
              <Left>
                <Thumbnail
                  large
                  source={require("../../assets/thumbnails/active/active-ada-accessibility-icon.png")}
              />
                <Body>
                  <Text>Activity Name Goes Here</Text>
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
      <Text style={{ margin: 10 }}>
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

const actionButtons = {
  one: {
    name: "leagues",
    icon: "ios-trophy"
  },
  two: {
    name: "subscribe",
    icon: "list"
  },
  three: {
    name: "meetup",
    icon: "ios-people"
  },
}