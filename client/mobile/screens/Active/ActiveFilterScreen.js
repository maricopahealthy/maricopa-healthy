import React from "react";
import { SectionList, View, StyleSheet } from "react-native";
import {
  Container,
  Content,
  ListItem,
  Text,
  Button,
  Input,
  Item
} from "native-base";
import { Rating } from "react-native-ratings";
import Section from "../../utils/SectionsUtility";
import SectionHeader from "../../components/SectionHeader";
import FilterButtons from "../../components/FilterButtons";
import ZipCodeInput from "../../components/ZipCodeInput";
import BlockButton from "../../components/BlockButton";
import {connect} from "react-redux";
import {applyFilter} from "../../actions/filterActions";

// Used for sample data ========================
const cityData = [
  {
    type: "city",
    data: [
      { id: 0, text: "Anthem" },
      { id: 1, text: "Avondale" },
      { id: 2, text: "Buckeye" },
      { id: 3, text: "Carefree" },
      { id: 4, text: "Chandler" },
      { id: 5, text: "Fountain Hills" },
      { id: 6, text: "Glendale" },
      { id: 7, text: "Goodyear" }
    ]
  }
];

const timeOfDay = [
  {
    type: "timeOfDay",
    data: [
      { id: 0, text: "Morning" },
      { id: 1, text: "Afternoon" },
      { id: 2, text: "Evening" }
    ]
  }
];

const sortByData = [
  {
    type: "sortBy",
    data: [
      { id: 0, text: "Best Match" },
      { id: 1, text: "Most Popular" },
      { id: 2, text: "Near to Me" }
    ]
  }
];
// Remove above ================================

/**
 * Display to add, modify, and delete filter categories for Active display results.
 */
class ActiveFilterScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
          <SectionList
            sections={sections}
            renderSectionHeader={SectionHeader}
            keyExtractor={extractKey}
          />
          <View>
            <BlockButton title="Apply Filter" onPress={() => this.props.apply(true)}/>
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
  Section("City", cityData, ({ item }) => {
    const { data, type } = item;
    return <FilterButtons type={type} data={data} />;
  }),
  Section("Zip Code", [{ id: 0 }], ({ item }) => {
    return (
      <ZipCodeInput />
    );
  }),
  Section("Time of Day", timeOfDay, ({ item }) => {
    const { data, type } = item;
    return <FilterButtons type={type} data={data} />;
  }),
  Section("Rating", [{ id: 0 }], ({ item }) => {
    return (
      <ListItem>
        <Rating readonly />
      </ListItem>
    );
  }),
  Section("Sort By", sortByData, ({ item }) => {
    const { data, type } = item;
    return <FilterButtons type={type} data={data} />;
  })
];

const mapDispatchToProps = dispatch => {
  return {
    apply: (boolean) => {
      dispatch(
        applyFilter(boolean)
      )
    }
  }
};

export default connect(null, mapDispatchToProps)(ActiveFilterScreen)
