// todo: ActiveScreen
import React from 'react';
import { SectionList } from 'react-native';
import { Container, Content, Card, CardItem, ListItem, Thumbnail, Text, Left, Body, Right, H3, Icon } from 'native-base';
import Section from '../../utils/SectionsUtility';
import SectionHeader from '../../components/SectionHeader';
import RecipeReviews from '../../components/RecipeReviewsComponent';
import ActionButtonRow from '../../components/ActionButtonRow';
import { connect } from 'react-redux'

const actionButtons = {
  one: {
    name: "leagues",
    icon: "ios-trophy"
  },
  two: {
    name: "subscribe",
    icon: "list"
  },
  three: {
    name: "meetup",
    icon: "ios-people"
  },
};

const extractKey = ({ id }) => id;


/**
 * Active Screen for viewing individual Active records.
 */
class ActiveScreen extends React.Component {

  render() {
    const { id, name, rating, reviews, thumbnail, description } = this.props.active;

    const sections = [
      Section('How To', [{id: 0, description: description}], ({ item }) => {
        return (
          <Text style={{ margin: 10 }}>
            {item.description}
          </Text>
        );
      }),
      Section('Find a Place', [{ id: 0 }], ({ item }) => {
        return (
          <Text>
            {/* // todo Add find a place component */}
            Find a place placeholder
      </Text>
        );
      }),
      Section('Reviews', [{ id: 0 }], ({ item }) => {
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
                  source={require("../../assets/thumbnails/active/active-ada-accessibility-icon.png")}
              />
                <Body>
                  <Text>{name}</Text>
                </Body>
              </Left>
              <Right>
                <Icon name='heart-empty' />
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
    )
  }
}

const mapStateToProps = ({ active }, props) => {
  return {
    active: active.byId[props.navigation.state.params.id]
  }
}

export default connect(mapStateToProps)(ActiveScreen)
