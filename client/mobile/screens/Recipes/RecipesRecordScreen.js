import React from 'react';
import {StyleSheet, SectionList, View} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Right,
  Icon,
  ListItem,
  Button
} from "native-base";
import {connect} from "react-redux";
import Section from '../../utils/SectionsUtility';
import SectionArray from '../../utils/SectionArrayUtility';
import SectionHeader from '../../components/SectionHeader';
import RecipeReviews from '../../components/RecipeReviewsComponent';

/**
 * RecipesRecord displays a detailed Screen for a single recipe from the RecipeList.
 */
class RecipesRecordScreen extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      ingredients: [],
      directions: [],
      nutrients: []
    }
  }

  componentWillMount() {
    const {recipe} = this.props;
    const ingredientData = recipe.ingredients.split(";");
    const directionData = recipe.directions.split(";");
    const nutritionData = recipe.nutrition_facts.split(";");
    this.setState({
      ingredients: SectionArray(ingredientData),
      directions: SectionArray(directionData),
      nutrients: SectionArray(nutritionData)
    })
  }

  render() {
    const {recipe} = this.props;
    const {ingredients, directions, nutrients} = this.state;
    return (
        <Container>
          <Content>
            {/* Recipe Item Card */}
            <Card transparent>
              <CardItem>
                <Left>
                  <Thumbnail
                      large
                      source={require("../../assets/thumbnails/recipes/apple-pecan-bars.png")}
                  />
                  <Body>
                    <Text>{recipe.name}</Text>
                  </Body>
                </Left>
                <Right>
                  <Icon name='heart-empty'/>
                </Right>
              </CardItem>
            </Card>
            {/* Action Buttons */}
            <View style={{flex: 1, flexDirection: "row"}}>
              <Button iconLeft style={{flex: 1, backgroundColor: "#B52126"}}>
                <Icon name="print"/>
                <Text>Print</Text>
              </Button>
              <Button iconLeft style={{flex: 1, backgroundColor: "#B52126"}}>
                <Icon name="restaurant"/>
                <Text>Eat Healthy</Text>
              </Button>
              <Button iconLeft style={{flex: 1, backgroundColor: "#B52126"}}>
                <Icon name="list"/>
                <Text>Subscribe</Text>
              </Button>
            </View>
            {/* Section information */}
            <SectionList
                sections={[
                  Section('Ingredients', ingredients, ({item}) => {
                    return (
                        <ListItem>
                          <Text>{item.data}</Text>
                        </ListItem>
                    );
                  }),
                  Section('Directions', directions, ({item, index}) => {
                    return (
                        <ListItem>
                          <Text>{index + 1}. {item.data}</Text>
                        </ListItem>
                    );
                  }),
                  Section('Nutrition Facts (Per Serving)', nutrients, ({item}) => {
                    return (
                        <ListItem>
                          <Text>{item.data}</Text>
                        </ListItem>
                    );
                  }),
                  Section('Reviews', [{id: 0}], ({item}) => {
                    return (
                        <ListItem>
                          <RecipeReviews/>
                        </ListItem>
                    );
                  })
                ]}
                renderSectionHeader={SectionHeader}
                keyExtractor={extractKey}
            />
          </Content>
        </Container>
    )
  }
}

function mapStateToProps({recipes}, ownProps) {
  const {navigation} = ownProps;
  return {
    recipe: recipes.byId[navigation.getParam("id")]
  };
};

export default connect(
    mapStateToProps,
    null
)(RecipesRecordScreen);

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
    backgroundColor: '#fff',
  },
});