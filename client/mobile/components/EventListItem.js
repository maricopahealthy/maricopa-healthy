import React from "react";
import {View, StyleSheet} from "react-native";
import {Card, CardItem, Body, Icon, Text} from "native-base";
import {withNavigation} from "react-navigation";
import moment from "moment";
import EventDateBadgeComponent from "./EventDateBadgeComponent";

const EventListItem = props => {
  const day = moment(props.item.start_date, "MM-DD-YYYY");
  return (
    <Card transparent style={{marginTop: 0, marginBottom: 0}}>
      <CardItem
        button
        style={props.index % 2 === 0 ? styles.whiteCard : styles.greyCard}
        onPress={() =>
          props.navigation.navigate("EventsRecord", {id: props.item.id})
        }
      >
        {/* Event Date Badge */}
        <EventDateBadgeComponent day={day}/>
        {/* Event Description */}
        <Body style={{justifyContent: "center", marginLeft: 15}}>
          <Text style={styles.header}>
            {props.item.name}
          </Text>
          <View
            style={{flexDirection: "row", justifyContent: "space-between"}}
          >
            <Text style={styles.teaser}>{props.item.start_time}</Text>
            <Text style={{...styles.teaser, textAlign: "right"}}>
              {props.item.cost}
            </Text>
          </View>
        </Body>
        {/* Navigational Arrow */}
        <Icon style={styles.arrow} name="ios-arrow-forward"/>
      </CardItem>
    </Card>
  );
};

export default withNavigation(EventListItem);

const styles = StyleSheet.create({
  whiteCard: {
    backgroundColor: "white",
    margin: 0,
    height: 88,
    padding: 8
  },
  greyCard: {
    backgroundColor: "#F6F6F6",
    margin: 0,
    height: 88,
    padding: 8
  },
  arrow: {
    color: "#8E8E93",
    width: 12
  },
  header: {
    fontSize: 18,
    fontFamily: "source-sans-pro-semi-bold"
  },
  teaser: {
    fontSize: 16,
    fontFamily: "source-sans-pro",
    color: "#8E8E93"
  }
});
