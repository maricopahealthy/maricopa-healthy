// todo: SubscribeScreen
import React from 'react';
import {View, StyleSheet, SectionList} from 'react-native';
import Section from "../../utils/SectionsUtility";
import {Container, Content, Icon, Button, Text} from "native-base";
import SectionHeader from "../../components/SectionHeader";
import {withNavigation} from "react-navigation";

const weeklyRecipe = [
  {
    id:0,
    text: "Get new recipe ideas delivered right to your inbox! Sign up today and receive a quick and easy recipe to try every Friday. No more, no less—just one great idea each week, and we won’t use your email for anything else. There are lots of delicious recipes waiting, so sign up today and get cooking!"
  }
];

const sections = [
  Section('Weekly Recipe', weeklyRecipe, ({ item }) => {
    return (
      <Text style={{margin: 15}}> {item.text} </Text>
    );
  })
];

const extractKey = ({ id }) => id;

/**
 * Primary Screen for managing User's subscriptions.
 */
class SubscribeScreen extends React.Component {

  render() {
    return (
      <Container>
        <Content>
          <Text style={{marginTop: 15, textAlign: "center", fontSize: 20}}>Catchy headline will go here.</Text>
          <Text style={{margin: 15}}>
            Description will go here…sed aliquet nibh a feugiat aliquam. Phasellus eleifend posuere quam vel auctor. Maecenas odio ante, sodales eu rhoncus vitae, lobortis et odio. Phasellus sit amet laoreet odio.
          </Text>
          <SectionList
            sections={sections}
            renderSectionHeader={SectionHeader}
            keyExtractor={extractKey}
          />
          <View style={styles.container}>
            <Button
              style={styles.button}
              full
              iconRight
              onPress={() => this.props.navigation.navigate("SubscribeRecipes")}
            >
              <Text>Subscribe</Text>
              <Icon name={"ios-lock"}/>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(SubscribeScreen);

const styles = StyleSheet.create({
  container: {
    alignSelf: "center"
  },
  button : {
    width: "50%",
    backgroundColor: "#B52126",
    textAlign: "center"
  }
});
