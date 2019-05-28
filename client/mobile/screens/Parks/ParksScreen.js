// todo: ParksScreen
import React from "react";
import { SectionList, View, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  H3,
  Icon
} from "native-base";
import Section from "../../utils/SectionsUtility";
import SectionHeader from "../../components/SectionHeader";
import RecipeReviews from "../../components/RecipeReviewsComponent";
import ActionButtonRow from "../../components/ActionButtonRow";
import { connect } from "react-redux";

const extractKey = ({ id }) => id;

const actionButtons = {
  one: {
    name: "more info",
    icon: "ios-alert"
  },
  two: {
    name: "directions",
    icon: "ios-car"
  },
  three: {
    name: "meetup",
    icon: "ios-people"
  }
};

/**
 * Parks Screen for viewing individual park records.
 */
class ParksScreen extends React.Component {
  render() {
    const {
      hours,
      id,
      name,
      rating,
      reviews,
      thumbnail,
      website_url,
      features
    } = this.props.park;

    const sections = [
      Section("Hours", hours, ({ item }) => {
        return (
          <ListItem>
            <View>
              <H3>{item.header}</H3>
              <Text>{item.body}</Text>
            </View>
          </ListItem>
        );
      }),
      Section(
        "Features",
        features.map((feature, ind) => ({ id: ind, feature })),
        ({ item }) => {
          return (
            <Text style={{ marginLeft: 10 }}>{`\u2022 ${item.feature}`}</Text>
          );
        }
      ),
      Section("Reviews", [{ id: 0 }], ({ item }) => {
        return (
          <ListItem>
            <RecipeReviews />
          </ListItem>
        );
      })
    ];

    return (
      <Container>
        <Content>
          <Card transparent>
            <CardItem>
              <Left>
                <Thumbnail
                  large
                  source={require("../../assets/thumbnails/parks/parks-thumb-placeholder-01.png")}
                />
                <Body>
                  <Text>{name}</Text>
                </Body>
              </Left>
              <Right>
                <Icon name="heart-empty" />
              </Right>
            </CardItem>
          </Card>
          <ActionButtonRow {...actionButtons} />
          <SectionList
            sections={sections}
            renderSectionHeader={SectionHeader}
            keyExtractor={extractKey}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ parks }, props) => {
  return {
    park: parks.byId[props.navigation.state.params.id]
  };
};

export default connect(mapStateToProps)(ParksScreen);

const styles = StyleSheet.create({});
