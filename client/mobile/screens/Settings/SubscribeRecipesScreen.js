// todo: SubscribeRecipesScreen

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Form, Item, Input, Label, CheckBox, Body } from 'native-base';

/**
 * Weekly Recipe registration information and consent form.
 */
export default class SubscribeRecipesScreen extends React.Component {
  state = {
    email: "",
    firstName: "",
    zip: "",
    checked: false
  }

  render() {
    return (
        <View>
          <Text>Weekly Recipes</Text>
          <Form>
            <Item stackedLabel>
              <Label>First Name</Label>
              <Input onChangeText={(value) => { this.setState({firstName: value })}} value={this.state.firstName} name="firstName" />
            </Item>
            <Item stackedLabel>
              <Label>Email Address</Label>
              <Input onChangeText={(value) => { this.setState({email: value })}} value={this.state.email} name="email" />
            </Item>
            <Item stackedLabel last>
              <Label>Zip Code</Label>
              <Input onChangeText={(value) => { this.setState({zip: value })}} value={this.state.zip} name="zip" />
            </Item>
            <View>
              <CheckBox onChange={() => { this.setState({checked: !this.state.checked })}} checked={this.state.checked}/>
              <Text>
                By checking this box, I agree to the use of my personal information as stated above and would like to receive weekly recipe ideas from Maricopa Healthy.
              </Text>
            </View>

            <Button>
              <Text>
                Sign me up!
              </Text>
            </Button>
          </Form>
        </View>
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