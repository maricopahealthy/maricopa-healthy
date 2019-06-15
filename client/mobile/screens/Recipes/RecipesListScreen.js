import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {
  Container,
  Content,
} from "native-base";
import { connect } from "react-redux";
import { fetchRecipes } from "../../actions/recipesActions";
import RecipeListItem from "../../components/RecipeListItem";

/**
 * Recipes resource home screen displaying a list view of available recipes.
 */
class RecipesListScreen extends React.Component {
  componentWillMount() {
    this.props.fetchRecipes();
  }

  render() {

    const filteredRecipes = () => {
      const {recipes, filter} = this.props

      if(filter.apply) {
        let newRecipes = recipes;
        for (let type in filter) {
          if(filter[type].length) {
            newRecipes = newRecipes.filter(recipe => filter[type].includes(recipe[type]))
          }
        }
        return newRecipes;
      } else {
        return recipes
      }
    };

    return (
      <Container>
        <Content style={{ flex: 1 }}>
          <FlatList
            data={filteredRecipes()}
            renderItem={({ item, index }) => <RecipeListItem item={item} index={index} />}
            keyExtractor={(item) => item.id.toString() }
          />
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({ recipes, filter }) {
  return {
    recipes: recipes.allIds.map(id => recipes.byId[id]),
    isFetching: recipes.isFetching,
    filter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRecipes: () => dispatch(fetchRecipes())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
