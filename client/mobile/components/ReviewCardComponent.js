import React from "react";
import { StyleSheet} from "react-native";
import {Rating} from "react-native-ratings";
import {Body, Card, CardItem, Left, Right, Text, Thumbnail} from "native-base";

const ReviewCard = (props) => {
  return (
    <Card style={styles.card}>
      <CardItem header style={styles.card}>
        <Left>
          <Thumbnail source={{ uri: 'http://placekitten.com/200/200' }} />
          <Body>
            <Text>Reviewer Name</Text>
            <Text note>Location</Text>
          </Body>
        </Left>
        <Right>
          <Body>
            <Rating readonly imageSize={20} />
            <Text note>time</Text>
          </Body>
        </Right>
      </CardItem>
      <CardItem style={styles.card}>
        <Body>
          <Text>
            Is this thing on?
          </Text>
        </Body>
      </CardItem>
    </Card>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F7F7F7",
  }
});