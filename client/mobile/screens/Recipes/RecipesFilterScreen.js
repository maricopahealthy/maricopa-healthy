// todo: RecipesFilterScreen
import React from "react";
import { SectionList, View, StyleSheet } from "react-native";
import {
  Container,
  Content,
  ListItem,
  Text,
  Button,
  Item,
  Input,
  Icon,
  Badge
} from "native-base";
import { Rating } from "react-native-ratings";
import Section from "../../utils/SectionsUtility";
import SectionHeader from "../../components/SectionHeader";
import FilterButtons from "../../components/FilterButtons";

// Used for sample data ========================
const mealTypeData = [
  { id: 0, text: "Breakfast" },
  { id: 1, text: "Lunch" },
  { id: 2, text: "Dinner" },
  { id: 3, text: "Dessert" },
  { id: 4, text: "Snack" },
  { id: 5, text: "Drinks" }
];

const sortByData = [
  { id: 0, text: "Recipe name (A to Z)" },
  { id: 1, text: "Recipe Name (Z to A)" },
  { id: 2, text: "Date Added (newest first)" },
  { id: 3, text: "Date Added (oldest first)" }
];
// Remove above ================================

/**
 *  Display to add, modify, and delete filter categories for Recipes display results.
 */
export default class RecipesFilterScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <SectionList
            sections={sections}
            renderSectionHeader={SectionHeader}
            keyExtractor={extractKey}
          />
          <View>
            <Button
              block
              style={{ backgroundColor: "#B52126" }}
              onPress={() => {}}
            >
              <Text>Apply Filter</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

/**
 * returns a unique id property for generating the necessary 'key' of a react list.
 * @param id
 * @returns {*}
 */
const extractKey = ({ id }) => id;

// sections to display for Filter headers
const sections = [
  Section("Ingredient", [{ id: 0 }], ({ item }) => {
    return (
      <ListItem padder>
        <Item regular>
          <Icon name="search" />
          <Input placeholder="Enter ingredient name" />
        </Item>
      </ListItem>
    );
  }),
  Section("Meal Type", [{mealTypeData}], ({ item }) => {
    const { mealTypeData } = item;
    return <FilterButtons data={mealTypeData} />;
  }),
  Section("Rating", [{ id: 0 }], ({ item }) => {
    return (
      <ListItem padder>
        <Rating readonly />
      </ListItem>
    );
  }),
  Section("Sort By", [{sortByData}], ({ item }) => {
    const { sortByData } = item;
    return <FilterButtons data={sortByData} />;
  })
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
