// todo: ForgotPasswordScreen
import React from 'react';
import {View, StyleSheet} from "react-native";
import {Container, Content, Button, Text, Item, Input, Form } from "native-base";
import BlockButton from "../../components/BlockButton";

export default class ForgotPasswordScreen extends React.Component {

  render() {
    return (
      <Container>
        <Content padder style={{flex: 1}}>
          <View style={{flex: 1}}>
            <Text>Submit your email address and we’ll send you you a code to reset your password.</Text>
          </View>
          <Form>
            <Item regular style={styles.formItem}>
              <Input placeholder="Email Address" />
            </Item>
          </Form>
          <View style={{flex: 1}}>
            <BlockButton
              title="Submit"
              icon="lock"
              onPress={() => {this.props.navigation.navigate("ResetPassword")}}
            />
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
  formItem: {
    borderColor: "#8E8E93",
    margin: 4,
    borderRadius: 5
  }
});