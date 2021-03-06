import React from "react";
import {SectionList, View, StyleSheet} from "react-native";
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
import ActionButtonRow from "../../components/ActionButtonRow";
import SeasonalProduceTabs from "../../components/SeasonalProduceTabs";
import RecipeReviews from "../../components/RecipeReviewsComponent";
import {connect} from "react-redux";
import axios from "axios";

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

const extractKey = ({id}) => id;

/**
 * Markets Screen for viewing individual market records.
 */
class MarketsScreen extends React.Component {
  componentDidMount() {
    axios
      .get(
        `http://localhost:9000/produce/market/${
          this.props.navigation.state.params.id
          }`
      )
      .then(response => {
        let produce = {
          Spring: [],
          Summer: [],
          Fall: [],
          Winter: []
        };
        for (let i = 0; i < response.data.length; i++) {
          produce[response.data[i].season] = [
            ...produce[response.data[i].season],
            response.data[i].name
          ];
        }
        this.setState({produce: produce});
      })
      .catch(err => {
        console.log(err);
      });
  }

  state = {
    produce: {
      Spring: [],
      Summer: [],
      Fall: [],
      Winter: []
    }
  };

  render() {
    const {
      id,
      name,
      payment_methods,
      hours,
      rating,
      reviews,
      thumbnail,
      website_url
    } = this.props.market;

    const sections = [
      Section("Time of Day", hours, ({item}) => {
        return (
          <ListItem>
            <View>
              <H3>{item.header}</H3>
              <Text>{item.body}</Text>
            </View>
          </ListItem>
        );
      }),
      Section("Seasonal Produce", [this.state.produce], ({item}) => {
        return <SeasonalProduceTabs item={item}/>;
      }),
      Section(
        "Payment Options",
        [{id: 0, text: payment_methods}],
        ({item}) => {
          return <Text style={{margin: 10}}>{item.text}</Text>;
        }
      ),
      Section("Reviews", [{id: 0}], ({item}) => {
        return (
          <ListItem>
            <RecipeReviews/>
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
                  source={require("../../assets/thumbnails/markets/markets-thumb-placeholder-01.png")}
                />
                <Body>
                  <Text>{name}</Text>
                </Body>
              </Left>
              <Right>
                <Icon name="heart-empty"/>
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

const mapStateToProps = ({markets}, props) => {
  return {
    market: markets.byId[props.navigation.state.params.id]
  };
};

export default connect(mapStateToProps)(MarketsScreen);
