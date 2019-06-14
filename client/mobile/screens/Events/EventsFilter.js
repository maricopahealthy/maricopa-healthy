import React from "react";
import {View, SectionList, StyleSheet} from "react-native";
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
import {Rating} from "react-native-ratings";
import Section from "../../utils/SectionsUtility";
import SectionHeader from "../../components/SectionHeader";
import FilterButtons from "../../components/FilterButtons";
import ZipCodeInput from "../../components/ZipCodeInput";
import BlockButton from "../../components/BlockButton";
import {applyFilter} from "../../actions/filterActions";
import {connect} from "react-redux";

// Used for sample data ====================
const cityData = [
  {
    type: "city",
    data: [
      {id: 0, text: "Avondale"},
      {id: 1, text: "Buckeye"},
      {id: 2, text: "Carefree"},
      {id: 3, text: "Cave Creek"},
      {id: 4, text: "Chandler"}
    ]
  }
];

const dayData = [
  {
    type: "day",
    data: [
      {id: 0, text: "Sunday"},
      {id: 1, text: "Monday"},
      {id: 2, text: "Tuesday"},
      {id: 3, text: "Wednesday"},
      {id: 4, text: "Thursday"},
      {id: 5, text: "Friday"},
      {id: 6, text: "Saturday"}
    ]
  }
];

const timeData = [
  {
    type: "timeOfDay",
    data: [
      {id: 0, text: "Morning"},
      {id: 1, text: "Afternoon"},
      {id: 2, text: "Evening"}
    ]
  }
];

const costData = [
  {
    type: "cost",
    data: [
      {id: 0, text: "FREE"},
      {id: 1, text: "Up to $4.00"},
      {id: 2, text: "$5.00 - 9.00"},
      {id: 3, text: "$10.00+"}
    ]
  }
];

const ageData = [
  {
    type: "age",
    data: [
      {id: 0, text: "All Ages"},
      {id: 1, text: "5 and under"},
      {id: 2, text: "6 to 10"},
      {id: 3, text: "11 to 18"},
      {id: 4, text: "Adults"},
      {id: 5, text: "Family Friendly"},
      {id: 6, text: "Seniors"}
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
// Remove above ============================

/**
 * Display to add, modify, and delete filter categories for Event display results.
 */
class EventsFilterScreen extends React.Component {
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

/**
 * returns a unique id property for generating the necessary 'key' of a react list.
 * @param id
 * @returns {*}
 */
const extractKey = ({id}) => id;

// sections to display for Filter headers
const sections = [
  Section("City", cityData, ({item}) => {
    const { data, type } = item;
    return <FilterButtons type={type} data={data} />;
  }),
  Section("Zip Code", [{id: 0}], ({item}) => {
    return (
      <ZipCodeInput />
    );
  }),
  Section("Day of Week", dayData, ({item}) => {
    const { data, type } = item;
    return <FilterButtons type={type} data={data} />;
  }),
  Section("Time of Day", timeData, ({item}) => {
    const { data, type } = item;
    return <FilterButtons type={type} data={data} />;
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
        <Item regular style={{flex: 2}}>
          <Input placeholder="From"/>
        </Item>
        <Text style={{flex: 1, textAlign: "center"}}>to</Text>
        <Item regular style={{flex: 2}}>
          <Input placeholder="To"/>
        </Item>
      </View>
    );
  }),
  Section("Cost", costData, ({item}) => {
    const { data, type } = item;
    return <FilterButtons type={type} data={data} />;
  }),
  Section("Ages", ageData, ({item}) => {
    const { data, type } = item;
    return <FilterButtons type={type} data={data} />;
  }),
  Section("Sort By", sortByData, ({item}) => {
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

export default connect(null, mapDispatchToProps)(EventsFilterScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
