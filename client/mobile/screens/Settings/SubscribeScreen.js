// todo: SubscribeScreen
import React from 'react';
import {View, StyleSheet, SectionList} from 'react-native';
import Section from "../../utils/SectionsUtility";
import {Container, Content, Icon, Button, Text, Left, Body, Right} from "native-base";
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
          <Button
            style={styles.button}
            large
            block
            iconRight
            onPress={() => this.props.navigation.navigate("SubscribeRecipes")}
          >
            <Left style={{flex: 1}}></Left>
            <Body style={{flex: 4}}>
              <Text style={{color: "white", fontSize: 24}}>Subscribe</Text>
            </Body>
            <Right style={{flex: 1, marginRight: 10}}>
              <Icon style={{color: "white"}} name={"ios-lock"}/>
            </Right>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(SubscribeScreen);

const styles = StyleSheet.create({
  button : {
    backgroundColor: "#B52126",
    margin: 15,
    paddingRight: 10
  }
});
