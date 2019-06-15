import React from "react";
import {View, SectionList, StyleSheet} from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Icon,
  ListItem
} from "native-base";
import {connect} from "react-redux";
import Section from "../../utils/SectionsUtility";
import SectionHeader from "../../components/SectionHeader";
import ActionButtonRow from "../../components/ActionButtonRow";
import EventDateBadgeComponent from "../../components/EventDateBadgeComponent";
import BlockButton from "../../components/BlockButton"
import moment from "moment";

/**
 * Summary view for viewing individual Event record.
 */
class EventsRecordScreen extends React.Component {
  constructor(props) {
    super(props);

    this.actionButtons = {
      one: {name: "Reminder", icon: "calendar"},
      two: {name: "Directions", icon: "car"},
      three: {name: "Meetup", icon: "people"}
    };
    this.day = moment(props.event.start_date, "MM-DD-YYYY");
  }

  render() {
    const {event} = this.props;
    console.log(this.day);
    return (
      <Container>
        <Content>
          {/* Event Record Header Card */}
          <Card transparent>
            <CardItem>
              {/* Event Date Badge */}
              <EventDateBadgeComponent day={this.day}/>
              <Body style={{justifyContent: "center", marginLeft: 15}}>
                <Text style={{fontSize: 18, fontWeight: "600"}}>{event.name}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Text style={{color: "#8E8E93"}}>
                    {event.start_time} - {event.end_time}
                  </Text>
                  <Text style={{color: "#8E8E93", textAlign: "right"}}>
                    {event.cost}
                  </Text>
                </View>
              </Body>
              {/* Favorite Icon */}
              <Icon name="heart-empty" style={{fontSize: 28}}/>
            </CardItem>
          </Card>
          {/* Action Buttons */}
          <ActionButtonRow {...this.actionButtons} />
          {/* Section information */}
          <SectionList
            sections={[
              Section("Details", [event], ({item}) => {
                return (
                  <ListItem>
                    <Text>{item.description}</Text>
                  </ListItem>
                );
              }),
              Section("Where", [event], ({item}) => {
                return (
                  <ListItem>
                    <Text>
                      {item.location} {item.address}, {item.state}{" "}
                      {item.zipcode}
                    </Text>
                  </ListItem>
                );
              })
            ]}
            renderSectionHeader={SectionHeader}
            keyExtractor={extractKey}
          />
          {/* Button */}
          <View style={{flex: 1}}>
            <BlockButton
              title="Learn More"
              onPress={() => {}}
            />
          </View>
          <View style={{flex: 1, padding: 16}}>
            <Text style={{fontSize: 12, width: 343}}>
              NOTE: Maricopa Healthy neither endorses nor sponsors the organization or activity being represented here. The distribution of this material is provided as a community service.
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({events}, ownProps) {
  const {navigation} = ownProps;
  return {
    event: events.byId[navigation.getParam("id")]
  };
}

export default connect(
  mapStateToProps,
  null
)(EventsRecordScreen);

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
    backgroundColor: "#fff"
  }
});
