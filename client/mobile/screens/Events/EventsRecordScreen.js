// todo: EventsRecordScreen
import React from "react";
import { View, SectionList, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Body,
  Text,
  Right,
  Icon,
  ListItem,
  Button
} from "native-base";
import { connect } from "react-redux";
import Section from "../../utils/SectionsUtility";
import SectionHeader from "../../components/SectionHeader";

// Used for sample data ==================================
const detailsData = [
  {
    id: 0,
    description:
      "Explore the food sources found in the Sonoran Desert with Master Gardeners. Local plants supply food for not only desert animals in the ecosystem but also for humans. Learn about the plants in our area, how different parts were used as sustenance and cautions that need to be taken when preparing them. Participants receive take-home information that includes how to grow edibles in your back yard."
  }
];

const locationData = [
  {
    id: 0,
    where:
      "San Tan Mountain Regional Park 6533 W. Phillips Road Queen Creek, AZ 85142"
  }
];

// remove above =============================================

// sections to display for Event Record
const sections = [
  Section("Details", detailsData, ({ item }) => {
    return (
      <ListItem>
        <Text>{item.description}</Text>
      </ListItem>
    );
  }),
  Section("Where", locationData, ({ item }) => {
    return (
      <ListItem>
        <Text>{item.where}</Text>
      </ListItem>
    );
  })
];

/**
 * Summary view for viewing individual Event record.
 */
class EventsRecordScreen extends React.Component {
  
  render() {
    const { event } = this.props;
    console.log(event);
    return (
      <Container>
        <Content>
          {/* Event Record Header Card */}
          <Card transparent>
            <CardItem>
              <Left>
                <Card transparent>
                  <CardItem
                    style={{
                      backgroundColor: "#667747",
                      borderRadius: "15"
                    }}
                  >
                    <View style={{ alignItems: "center" }}>
                      <Text style={{ color: "#fff" }}>SAT</Text>
                      <Text
                        style={{
                          color: "#fff",
                          fontWeight: "bold",
                          fontSize: "30"
                        }}
                      >
                        09
                      </Text>
                      <Text style={{ color: "#fff" }}>JUN</Text>
                    </View>
                  </CardItem>
                </Card>
                <Body>
                  <Text>{event.name}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Text style={{ color: "#8E8E93" }}>{event.start_time} - {event.end_time}</Text>
                    <Text style={{ color: "#8E8E93", textAlign: "right" }}>
                      {event.cost}
                    </Text>
                  </View>
                </Body>
              </Left>
              <Right>
                <Icon name="heart-empty" />
              </Right>
            </CardItem>
          </Card>
          {/* Action Buttons */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Button
              iconLeft
              style={{ flex: 1, backgroundColor: "#B52126" }}
            >
              <Icon name="calendar" />
              <Text>Reminder</Text>
            </Button>
            <Button
              iconLeft
              style={{ flex: 1, backgroundColor: "#B52126" }}
            >
              <Icon name="car" />
              <Text>Directions</Text>
            </Button>
            <Button
              iconLeft
              style={{ flex: 1, backgroundColor: "#B52126" }}
            >
              <Icon name="people" />
              <Text>Meetup</Text>
            </Button>
          </View>
          {/* Section information */}
          <SectionList
            sections={[
              Section("Details", [event], ({ item }) => {
                return (
                  <ListItem>
                    <Text>{item.description}</Text>
                  </ListItem>
                );
              }),
              Section("Where", [event], ({ item }) => {
                return (
                  <ListItem>
                    <Text>{item.location} {item.address}, {item.state} {item.zipcode}</Text>
                  </ListItem>
                );
              })
            ]}
            renderSectionHeader={SectionHeader}
            keyExtractor={extractKey}
          />
          {/* Button */}
          <View style={{ flex: 1 }}>
            <Button
              block
              style={{ backgroundColor: "#B52126" }}
              onPress={() => {}}
            >
              <Text>Learn More</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({events}, ownProps) {
  const { navigation } = ownProps;
  return {
    event: events.byId[navigation.getParam("id")]
  }
}

export default connect(mapStateToProps, null)(EventsRecordScreen);

/**
 * returns a unique id property for generating the necessary 'key' of a react list.
 * @param id
 * @returns {*}
 */
const extractKey = ({ id }) => id;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});