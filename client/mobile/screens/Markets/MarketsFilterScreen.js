// todo: MarketsFilterScreen
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
import {applyFilter, updateFilter} from "../../actions/filterActions";
import {connect} from "react-redux";
import ZipCodeInput from "../../components/ZipCodeInput";
import BlockButton from "../../components/BlockButton";

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

const dayOfWeek = [
  {
    type: "day",
    data: [
      { id: 0, text: "Sunday" },
      { id: 1, text: "Monday" },
      { id: 2, text: "Tuesday" },
      { id: 3, text: "Wednesday" },
      { id: 4, text: "Thursday" },
      { id: 5, text: "Friday" },
      { id: 6, text: "Saturday" }
    ]
  }
];

const timeOfDay = [
  {
    type: "timeOfDay",
    data: [
      { id: 0, text: "Morning" },
      { id: 1, text: "Midday" },
      { id: 2, text: "Afternoon" },
      { id: 3, text: "Evening" }
    ]
  }
];

const paymentData = [
  {
    type: "payment",
    data: [
      { id: 0, text: "Cash" },
      { id: 1, text: "Check" },
      { id: 2, text: "Credit" },
      { id: 3, text: "SNAP" },
      { id: 4, text: "FMNP" },
      { id: 5, text: "SNAP Matching" }
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
 *  Display to add, modify, and delete filter categories for Markets display results.
 */
class MarketsFilterScreen extends React.Component {

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
            <BlockButton title="Apply Filter" onPress={() => this.props.apply(true)}/>
          </View>
        </Content>
      </Container>
    );
  }
}

const // sections to display for Filter headers
  sections = [
    Section("City", cityData, ({ item }) => {
      const { data, type } = item;
      return <FilterButtons type={type} data={data} />;
    }),
    Section("Zip Code", [{ id: 0 }], ({ item }) => {
      return (
        <ZipCodeInput />
      );
    }),
    Section("Day of Week", dayOfWeek, ({ item }) => {
      const { data, type } = item;
      return <FilterButtons type={type} data={data} />;
    }),
    Section("Time of Day", timeOfDay, ({ item }) => {
      const { data, type } = item;
      return <FilterButtons type={type} data={data} />;
    }),
    Section("Payment Options", paymentData, ({ item }) => {
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

/**
 * returns a unique id property for generating the necessary 'key' of a react list.
 * @param id
 * @returns {*}
 */
const extractKey = ({ id }) => id;

const mapDispatchToProps = dispatch => {
  return {
    apply: (boolean) => {
      dispatch(
        applyFilter(boolean)
      )
    }
  }
};

export default connect(null, mapDispatchToProps)(MarketsFilterScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
