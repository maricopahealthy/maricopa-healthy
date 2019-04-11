// todo: LoginScreen
import React from 'react';
import { View, StyleSheet } from "react-native";
import { Container, Content, Button, Text, Form, Item, Input } from "native-base";

export default class LoginScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content padder>
            <Form>
              <Item regular>
                <Input placeholder='Email Address'/>
              </Item>
              <Item regular>
                <Input placeholder='Password (case sensitive)'/>
              </Item>
            </Form>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
              <Button
                  bordered
                  onPress={() => {this.props.navigation.navigate("App")}}
              >
                <Text>Login</Text>
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