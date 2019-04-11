// todo: SignUpScreen
import React from 'react';
import { View, StyleSheet } from "react-native";
import {Container, Content, Button, Text, Item, Input, Form} from "native-base";

export default class SignUpScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content padder>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
              <Text>Sign Up Screen Text goes here</Text>
            </View>
            <Form>
              <Item regular>
                <Input placeholder='First Name'/>
              </Item>
              <Item regular>
                <Input placeholder='Email Address'/>
              </Item>
              <Item regular>
                <Input placeholder='Zip Code'/>
              </Item>
              <Item regular>
                <Input placeholder='Password'/>
              </Item>
              <Item regular>
                <Input placeholder='Promo Code (optional)'/>
              </Item>
            </Form>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
              <Button
                  bordered
                  onPress={() => this.props.navigation.navigate("OnBoarding")}
              >
                <Text>Create Account</Text>
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