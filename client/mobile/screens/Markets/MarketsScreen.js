// todo: MarketsScreen
import React from 'react';
import { SectionList, View, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, ListItem, Thumbnail, Text, Left, Body, Right, H3, Icon } from 'native-base';
import Section from '../../utils/SectionsUtility';
import SectionHeader from '../../components/SectionHeader';
import ActionButtonRow from '../../components/ActionButtonRow';
import SeasonalProduceTabs from '../../components/SeasonalProduceTabs';
import RecipeReviews from '../../components/RecipeReviewsComponent';

const hours = [
  {
    id: 0,
    day: 'Wednesday',
    month: 'May - June: 8:00 am - 12:00 pm, October - April: 8:00 am - 12:00 pm'
  },
  {
    id: 1,
    day: 'Saturday',
    month: 'May - September: 8:00 am - 12:00 pm October - April: 9:00 am - 1:00 pm'
  }
];

const seasonalProduce = [{
  data: [
    {
      id: 0,
      text: 'Spring',
      produce: 'Artichokes, Asparagus, Beets, Bok Choy, Broccoli, Brussels Sprouts, Cabbage, Carrots, Cauliflower, Celery, Chard, Cucumbers, Eggplant, Grapefruit, Green Onions, Greens, Kale, Kohlrabi, Leeks, Lettuce, Onions, Oranges, Parsnips, Radishes, Spinach, Strawberries, Summer Squash, Tomatoes, Turnips'
    },
    {
      id: 1,
      text: 'Summer',
      produce: 'Artichokes, Asparagus, Beets, Bok Choy, Broccoli, Brussels Sprouts, Cabbage, Carrots, Cauliflower, Celery, Chard, Cucumbers, Eggplant, Grapefruit, Green Onions, Greens, Kale, Kohlrabi, Leeks, Lettuce, Onions, Oranges, Parsnips, Radishes, Spinach, Strawberries, Summer Squash, Tomatoes, Turnips'
    },
    {
      id: 2,
      text: 'Autumn',
      produce: 'Artichokes, Asparagus, Beets, Bok Choy, Broccoli, Brussels Sprouts, Cabbage, Carrots, Cauliflower, Celery, Chard, Cucumbers, Eggplant, Grapefruit, Green Onions, Greens, Kale, Kohlrabi, Leeks, Lettuce, Onions, Oranges, Parsnips, Radishes, Spinach, Strawberries, Summer Squash, Tomatoes, Turnips'
    },
    {
      id: 3,
      text: 'Winter',
      produce: 'Artichokes, Asparagus, Beets, Bok Choy, Broccoli, Brussels Sprouts, Cabbage, Carrots, Cauliflower, Celery, Chard, Cucumbers, Eggplant, Grapefruit, Green Onions, Greens, Kale, Kohlrabi, Leeks, Lettuce, Onions, Oranges, Parsnips, Radishes, Spinach, Strawberries, Summer Squash, Tomatoes, Turnips'
    }
  ]
}]

const paymentOptions = [
  {
    id: 0,
    text: 'Cash, Check, Visa, Mastercard, American Express, SNAP, WIC, FMNP, Double Up Food Bucks'
  }
]

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

const extractKey = ({ id }) => id

/**
 * Markets Screen for viewing individual market records.
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
                  source={require("../../assets/thumbnails/markets/markets-thumb-placeholder-01.png")}
                />
                <Body>
                  <Text>Market Name Goes Here</Text>
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
  Section('Seasonal Produce', seasonalProduce, ({ item }) => {
    return (
      <SeasonalProduceTabs item={item} />
    );
  }),
  Section('Payment Options', paymentOptions, ({ item }) => {
    return (
      <Text style={{ margin: 10 }}>
        {item.text}
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
