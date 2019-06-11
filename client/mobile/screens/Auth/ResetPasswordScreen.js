// todo: ResetPasswordScreen
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Button, Text, Form, Item, Input } from "native-base";
import BlockButton from "../../components/BlockButton";


export default class ResetPasswordScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content padder style={{flex: 1}}>
            <View style={{ flex: 1 }}>
              <Text>
                You can now reset the password for your account. A good password will be at least 8 characters long and include letters (both upper and lower case), digits and symbols. Please enter a new password.
              </Text>
            </View>
            <Form>
              <Item regular>
                <Input placeholder='Email Address' />
              </Item>
            </Form>
            <View style={{ flex: 1 }}>
              <BlockButton
                  title="Submit"
                  icon="lock"
                  onPress={() => {this.props.navigation.navigate("Login")}}
              />
            </View>
            <View style={{flex: 1, alignItems: "center"}}>
              <Text>
                Still having trouble?
                <Text style={{color: "#B52126"}}> Contact us.</Text>
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