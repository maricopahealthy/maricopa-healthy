import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Container, Content, Button, Text, Icon } from "native-base";

/**
 * Primary screen for accessing User's 'Favorite-d' content.
 */
export default class FavoritesScreen extends React.Component {

  render() {
    return (
      <Container>
        <Content padder>
          {/* Content */}
          <View style={{flex: 1}}>
            <Text>You don't have any favorites.</Text>
          </View>
          <View style={{flex: 1}}>
            <Text>To save favorites, you need to create an account.</Text>
          </View>
          {/* Button */}
          <View style={{flex: 1}}>
            <Button block style={{backgroundColor: "#B52126"}} iconRight onPress={()=>{}}>
              <Text>Sign Up</Text>
              <Icon name="lock"/>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});