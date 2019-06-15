import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Container, Content, Button, Text, Icon, Left, Body, Right } from "native-base";
import { withNavigation } from 'react-navigation';
import BlockButton from "../../components/BlockButton";


/**
 * Primary screen for accessing User's 'Favorite-d' content.
 */
class FavoritesScreen extends React.Component {

  render() {
    return (
      <Container>
        <Content padder>
          {/* Content */}
          <View style={{margin: 10, marginTop: 20}}>
            <Text style={{fontSize: 24}}>You don't have any favorites.</Text>
          </View>
          <View style={{margin: 10}}>
            <Text style={{fontSize: 16}}>To save favorites, you need to create an account.</Text>
          </View>
          <BlockButton
            title="Sign Up"
            icon="ios-lock"
            onPress={() => this.props.navigation.navigate("SignUp")}
          />
        </Content>
      </Container>
    )
  }
}

export default withNavigation(FavoritesScreen)

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#B52126",
    margin: 10,
    marginTop: 30,
    paddingRight: 10,
    height: 48
  }
});