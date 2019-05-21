import React from "react";
import { View } from "react-native";
import { Card, CardItem, Left, Body, Right, Icon, Text } from "native-base";
import { withNavigation } from "react-navigation";

const EventListItem = props => {
  return (
    <Card transparent>
      <CardItem
        button
        onPress={() =>
          props.navigation.navigate("EventsRecord", { id: props.item.id })
        }
      >
        <Left>
          {/* Event Date Badge */}
          <Card transparent>
            <CardItem
              style={{ backgroundColor: "#667747", borderRadius: "15" }}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "#fff" }}>SAT</Text>
                <Text
                  style={{ color: "#fff", fontWeight: "bold", fontSize: "30" }}
                >
                  09
                </Text>
                <Text style={{ color: "#fff" }}>JUN</Text>
              </View>
            </CardItem>
          </Card>
          {/* Event Description */}
          <Body>
            <Text style={{ fontSize: "20", fontWeight: "bold" }}>
              {props.item.name}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#8E8E93" }}>{props.item.start_time}</Text>
              <Text style={{ color: "#8E8E93", textAlign: "right" }}>
                {props.item.cost}
              </Text>
            </View>
          </Body>
        </Left>
        {/* Navigational Arrow */}
        <Right>
          <Icon name="ios-arrow-forward" />
        </Right>
      </CardItem>
    </Card>
  );
};

export default withNavigation(EventListItem);
