import React from 'react';
import { View, StyleSheet, FlatList } from "react-native";
import {Container, Content, Text, Item, Input, Form } from "native-base";
import BlockButton from "../../components/BlockButton";

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
              <Item regular style={styles.formItem}>
                <Input placeholder='First Name'/>
              </Item>
              <Item regular style={styles.formItem}>
                <Input placeholder='Email Address'/>
              </Item>
              <Item regular style={styles.formItem}>
                <Input placeholder='Zip Code'/>
              </Item>
              <Item regular style={styles.formItem}>
                <Input placeholder='Password'/>
              </Item>
              <Item regular style={styles.formItem}>
                <Input placeholder='Promo Code (optional)'/>
              </Item>
            </Form>
            <View style={{flex: 1}}>
              <Text>
                I have reviewed and agree to the
                <Text
                  style={{color: "#B52126"}}
                  onPress={() => {}}
                > Terms of Service </Text>
                and
                <Text
                  style={{color: "#B52126"}}
                  onPress={() => {}}
                > Privacy Policy.</Text>
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <BlockButton
                title="Create Account"
                icon="lock"
                onPress={() => this.props.navigation.navigate("Login")}
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