// todo: RecipesRecordScreen
import React from 'react';
import { StyleSheet, SectionList, View } from 'react-native';
import { Container, Content, Card, CardItem, Left, Thumbnail, Body, Text, Right, Icon, ListItem, Button } from "native-base";
import Section from '../../utils/SectionsUtility';
import SectionHeader from '../../components/SectionHeader';
import RecipeReviews from '../../components/RecipeReviewsComponent';

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

const nutritionData = [
  {
    id: 0,
    nutrition: 'Calories, 260; Carbohydrates, 37 g; Protein,7 g; Total Fat, 10 g; Saturated Fat,1.5 g; Trans Fat,0 g; Cholesterol, 45 mg; Fiber, 6 g; Total Sugars, 14 g; Sodium, 330 mg; Calcium, 55 mg; Folate, 9.88 mcg; Iron, 1.85 mg.'
  }
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
  Section('Nutrition Facts (Per Serving)', nutritionData, ({item}) => {
    return (
        <ListItem>
          <Text>{item.nutrition}</Text>
        </ListItem>
    );
  }),
  Section('Reviews', [{id: 0}], ({item}) => {
    return (
        <ListItem>
          <RecipeReviews />
        </ListItem>
    );
  })
];

/**
 * RecipesRecord displays a detailed Screen for a single recipe from the RecipeList.
 */
export default class RecipesRecordScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content>
            {/* Recipe Item Card */}
            <Card transparent>
              <CardItem>
                <Left>
                  <Thumbnail
                    large
                    source={require("../../assets/thumbnails/recipes/apple-pecan-bars.png")}
                  />
                  <Body>
                    <Text>Apple Pecan Bars</Text>
                  </Body>
                </Left>
                <Right>
                  <Icon name='heart-empty' />
                </Right>
              </CardItem>
            </Card>
            {/* Action Buttons */}
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Button iconLeft style={{ flex: 1, backgroundColor: "#B52126" }}>
                <Icon name="print" />
                <Text>Print</Text>
              </Button>
              <Button iconLeft style={{ flex: 1, backgroundColor: "#B52126" }}>
                <Icon name="restaurant" />
                <Text>Eat Healthy</Text>
              </Button>
              <Button iconLeft style={{ flex: 1, backgroundColor: "#B52126" }}>
                <Icon name="list" />
                <Text>Subscribe</Text>
              </Button>
            </View>
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

/**
 * returns a unique id property for generating the necessary 'key' of a react list.
 * @param id
 * @returns {*}
 */
const extractKey = ({id}) => id;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});