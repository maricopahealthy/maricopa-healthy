import React from 'react';
import { View, StyleSheet } from "react-native";
import { Container, Content, Text, Form, Item, Input } from "native-base";
import BlockButton from "../../components/BlockButton";

export default class LoginScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content
              padder
              style={{ flex: 1 }}
          >
            <Form>
              <Item regular style={styles.formItem}>
                <Input placeholder='Email Address' />
              </Item>
              <Item regular style={styles.formItem}>
                <Input placeholder='Password (case sensitive)' />
              </Item>
            </Form>
            <View style={{ flex: 1 }}>
              <BlockButton
                title="Log In"
                icon="lock"
                onPress={() => this.props.navigation.navigate("App")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text>
                <Text
                    style={{ color: "#B52126" }}
                    onPress={() => this.props.navigation.navigate("ForgotPassword")}
                >Forgot your password?</Text>
                Don't have a Maricopa Healthy account?
                <Text
                    style={{ color: "#B52126" }}
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
  formItem: {
    borderColor: "#8E8E93",
    margin: 4,
    borderRadius: 5
  }
});