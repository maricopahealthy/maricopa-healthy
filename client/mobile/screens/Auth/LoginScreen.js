// todo: LoginScreen
import React from 'react';
import { View, StyleSheet } from "react-native";
import { Container, Content, Button, Text, Form, Item, Input } from "native-base";

export default class LoginScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content
              padder
              style={{ flex: 1 }}
          >
            <Form>
              <Item regular>
                <Input placeholder='Email Address' />
              </Item>
              <Item regular>
                <Input placeholder='Password (case sensitive)' />
              </Item>
            </Form>
            <View style={{ flex: 1 }}>
              <Button
                  block
                  danger
                  onPress={() => {this.props.navigation.navigate("App")}}
              >
                <Text>Login</Text>
              </Button>
            </View>
            <View style={{ flex: 1 }}>
              <Text>
                <Text
                    style={{ color: 'red' }}
                    onPress={() => this.props.navigation.navigate("ResetPassword")}
                >Forgot your password?</Text>
                Don't have a Maricopa Healthy account?
                <Text
                    style={{ color: 'red' }}
                    onPress={() => this.props.navigation.navigate("SignUp")}
                >Create an account.</Text>
              </Text>
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