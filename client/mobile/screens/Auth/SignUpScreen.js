// todo: SignUpScreen
import React from 'react';
import { View, StyleSheet, FlatList } from "react-native";
import {Container, Content, Button, Text, Item, Input, Form } from "native-base";

export default class SignUpScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content padder>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
              <FlatList
                data={[
                  {key: 'list-0', text: 'Get more out of Maricopa Healthy by creating an account so you can:'},
                  {key: 'list-1', text: '\u2022 Favorite content and view it later'},
                  {key: 'list-2', text: '\u2022 Schedule or join a meetup;'},
                  {key: 'list-3', text: '\u2022 Rate content and upload photos;'},
                  {key: 'list-4', text: '\u2022 Subscribe to personalized content.'}
                ]}
                renderItem={({item}) => <Text>{item.text}</Text>}
              />
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
            <View style={{ flex: 1 }}>
              <Button
                  block
                  danger
                  onPress={() => {this.props.navigation.navigate("Login")}}
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