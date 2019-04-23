// todo: ResetPasswordScreen
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Button, Text, Form, Item, Input } from "native-base";

export default class ResetPasswordScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content
              padder
              style={{ flex: 1 }}
          >
            <View style={{ flex: 1 }}>
              <Text>Submit your email address and we'll send you a code to reset your password.</Text>
            </View>
            <Form>
              <Item regular>
                <Input placeholder='Email Address' />
              </Item>
            </Form>
            <View style={{ flex: 1 }}>
              <Button
                  block
                  danger
                  onPress={() => {this.props.navigation.navigate("Login")}}
              >
                <Text>Submit</Text>
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