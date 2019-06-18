import React from "react";
import {Card, CardItem, Text} from "native-base";
import {View, StyleSheet} from "react-native";
import moment from "moment";

function EventDateBadgeComponent(props) {
  return (
    <Card transparent>
      <CardItem style={styles.badge}>
        <View style={{alignItems: "center"}}>
          <Text style={styles.context}>{props.day.format("ddd").toUpperCase()}</Text>
          <Text style={styles.date}>{props.day.format("DD")}</Text>
          <Text style={styles.context}>{props.day.format("MMM").toUpperCase()}</Text>
        </View>
      </CardItem>
    </Card>
  );
}

export default EventDateBadgeComponent;

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "#667747",
    borderRadius: 12,
    width: 72,
    height: 72,
    paddingVertical: 14,
    paddingHorizontal: 18
  },
  date: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 34
  },
  context: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
    margin: -8
  }
});