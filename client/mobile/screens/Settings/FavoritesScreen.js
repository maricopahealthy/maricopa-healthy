import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Container, Content, Button, Text, Icon, Left, Body, Right } from "native-base";
import { withNavigation } from 'react-navigation';


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
          <Button large block style={styles.button} iconRight onPress={() => this.props.navigation.navigate("SignUp")} >
            <Left style={{flex: 1}}></Left>
            <Body style={{flex: 4}}>
              <Text style={{color: "white", fontSize: 24}}>Sign Up</Text>
            </Body>
            <Right style={{flex: 1, marginRight: 10}}>
              <Icon style={{color: "white"}} name="lock"/>
            </Right>
          </Button>
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
    paddingRight: 10
  }
});