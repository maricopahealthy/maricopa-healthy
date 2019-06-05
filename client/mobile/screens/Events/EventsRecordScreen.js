import React from "react";
import {View, SectionList, StyleSheet} from "react-native";
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
import {connect} from "react-redux";
import Section from "../../utils/SectionsUtility";
import SectionHeader from "../../components/SectionHeader";
import ActionButtonRow from "../../components/ActionButtonRow";

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
    }
  }

// todo: figure out how to programmatically assign date badge
  render() {
    const {event} = this.props;
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
                    <View style={{alignItems: "center"}}>
                      <Text style={{color: "#fff"}}>SAT</Text>
                      <Text
                        style={{
                          color: "#fff",
                          fontWeight: "bold",
                          fontSize: 30
                        }}
                      >
                        09
                      </Text>
                      <Text style={{color: "#fff"}}>JUN</Text>
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
                    <Text style={{color: "#8E8E93"}}>
                      {event.start_time} - {event.end_time}
                    </Text>
                    <Text style={{color: "#8E8E93", textAlign: "right"}}>
                      {event.cost}
                    </Text>
                  </View>
                </Body>
              </Left>
              <Right>
                <Icon name="heart-empty"/>
              </Right>
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
            <Button
              block
              style={{backgroundColor: "#B52126"}}
              onPress={() => {
              }}
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
