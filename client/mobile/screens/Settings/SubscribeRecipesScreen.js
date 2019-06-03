// todo: SubscribeRecipesScreen

import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { Container, Content, Button, Text, Form, Item, Input, Label, CheckBox } from 'native-base';

/**
 * Weekly Recipe registration information and consent form.
 */
export default class SubscribeRecipesScreen extends React.Component {
  state = {
    email: "",
    firstName: "",
    zip: "",
    checked: false
  };

  render() {
    return (
        <Container>
          <Content>
            <View
              style={{
                flex: 2,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 25,
              }}
            >
              <Image source={ require("../../assets/logos/loading/about-mh-logo-color.png") }/>
            </View>

            <Text style={styles.container}>Get new recipe ideas delivered right to your inbox! Sign up today and receive a quick and easy recipe to try every Friday. No more, no less---just one great idea each week, and we won't use your email for anything else. There are lots of delicious recipes waiting, so sign up today and get cooking!</Text>

            <Form>
              <Item stackedLabel>
                <Label>First Name</Label>
                <Input onChangeText={(value) => { this.setState({firstName: value })}} value={this.state.firstName} name="firstName" />
              </Item>
              <Item stackedLabel>
                <Label>Email Address</Label>
                <Input onChangeText={(value) => { this.setState({email: value })}} value={this.state.email} name="email" />
              </Item>
              <Item stackedLabel>
                <Label>Zip Code</Label>
                <Input onChangeText={(value) => { this.setState({zip: value })}} value={this.state.zip} name="zip" />
              </Item>

              <Text style={{marginTop: 15, marginLeft: 15, fontSize: 20}}>Confirming your permission: </Text>
              <Text style={styles.container}>Maricopa Healthy believes in transparency and protecting your personal information. The information collected in this form will only be used ti send you healthy recipe ideas once a week and analyze the geographic use of our app (zip code). We will not sell or rent your information to any governmental, commercial or other entity.</Text>

              <View style={styles.check}>
                <CheckBox onPress={() => { this.setState({checked: !this.state.checked })}} checked={this.state.checked} color="#B52126"/>
                <Text style={{width: "90%"}}>
                  By checking this box, I agree to the use of my personal information as stated above and would like to receive weekly recipe ideas from Maricopa Healthy.
                </Text>
              </View>

              <Text style={styles.container}>You can change your mind at any time by clicking the unsubscribe link in the footer of any email you receive from us, or by contacting use at MaricopaHealthy@mail.maricopa.gov. We will treat your information with respect. For more information about our privacy practices , please visit the Privacy section of our app or https://www.maricopa.gov/4805/Maricopa-Healthy-App-Privacy-Policy. By tapping the red Sign me up! button below, you agree that we may process your information in accordance with these terms.  </Text>

              <Button disabled={!this.state.checked} block style={{backgroundColor: "#B52126"}}>
                <Text>
                  Sign me up!
                </Text>
              </Button>
            </Form>
          </Content>
        </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  check: {
    width: "100%",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});