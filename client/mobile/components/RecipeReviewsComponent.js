import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Text, Card, CardItem, Body, Left, Right, Thumbnail } from 'native-base'
import { Rating } from "react-native-ratings";

const RecipeReviews = (props) => {
  return (
      <View style={{ flex: 1 }}>
        {/* Review Chart */}
        <Card transparent>
          <CardItem>
            <Left></Left>
            <Right>
              <Rating readonly imageSize={20} />
              <Text note> # Reviews</Text>
            </Right>
          </CardItem>
        </Card>
        {/* Review Survey */}
        <Card transparent>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'http://placekitten.com/200/200' }} />
              <Body>
                <Text>Gannon</Text>
                <Text note>Tap the stars to rate this market:</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Rating readonly />
          </CardItem>
        </Card>
        {/* List of Reviews */}
        <Card>
          <CardItem header>
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
          <CardItem>
            <Body>
              <Text>
                Is this thing on?
              </Text>
            </Body>
          </CardItem>
        </Card>
      </View>
  )
};

export default RecipeReviews;

const styles = StyleSheet.create({});