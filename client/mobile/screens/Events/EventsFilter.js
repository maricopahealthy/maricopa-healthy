import React from "react";
import { View, SectionList, StyleSheet } from "react-native";
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

// Used for sample data ====================
const cityData = [
  { id: 0, text: "Avondale" },
  { id: 1, text: "Buckeye" },
  { id: 2, text: "Carefree" },
  { id: 3, text: "Cave Creek" },
  { id: 4, text: "Chandler" }
];

const dayData = [
  { id: 0, text: "Sunday" },
  { id: 1, text: "Monday" },
  { id: 2, text: "Tuesday" },
  { id: 3, text: "Wednesday" },
  { id: 4, text: "Thursday" },
  { id: 5, text: "Friday" },
  { id: 6, text: "Saturday" }
];

const timeData = [
  { id: 0, text: "Morning" },
  { id: 1, text: "Afternoon" },
  { id: 2, text: "Evening" }
];

const costData = [
  { id: 0, text: "FREE" },
  { id: 1, text: "Up to $4.00" },
  { id: 2, text: "$5.00 - 9.00" },
  { id: 3, text: "$10.00+" }
];

const ageData = [
  { id: 0, text: "All Ages" },
  { id: 1, text: "5 and under" },
  { id: 2, text: "6 to 10" },
  { id: 3, text: "11 to 18" },
  { id: 4, text: "Adults" },
  { id: 5, text: "Family Friendly" },
  { id: 6, text: "Seniors" }
]

const sortByData = [
  { id: 0, text: "Best Match" },
  { id: 1, text: "Most Popular" },
  { id: 2, text: "Near to Me" }
];
// Remove above ============================

/**
 * Display to add, modify, and delete filter categories for Event display results.
 */
export default class EventsFilterScreen extends React.Component {
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
  Section("City", [{cityData}], ({ item }) => {
    const { cityData } = item;
    return <FilterButtons data={cityData} />;;
  }),
  Section("Zip Code", [{ id: 0 }], ({ item }) => {
    return (
      <Item regular>
        <Input placeholder="Zip Code" />
      </Item>
    );
  }),
  Section("Day of Week", [{dayData}], ({ item }) => {
    const { dayData } = item;
    return <FilterButtons data={dayData} />;
  }),
  Section("Time of Day", [{timeData}], ({ item }) => {
    const { timeData } = item;
    return <FilterButtons data={timeData} />;
  }),
  Section("Date Range", [{id: 0}], ({item}) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Item regular style={{ flex: 2 }}>
          <Input placeholder="From" />
        </Item>
        <Text style={{ flex: 1, textAlign: "center" }}>to</Text>
        <Item regular style={{ flex: 2 }}>
          <Input placeholder="To" />
        </Item>
      </View>
    );
  }),
  Section("Cost", [{costData}], ({ item }) => {
    const { costData } = item;
    return <FilterButtons data={costData} />;
  }),
  Section("Ages", [{ageData}], ({ item }) => {
    const { ageData } = item;
    return <FilterButtons data={ageData} />;
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
