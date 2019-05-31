import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Container, Content, Text } from "native-base";

/**
 * Contact Information Form for Maricopa Healthy.
 */
export default class ContactInfoScreen extends React.Component {

  render() {
    return (
      <Container>
        <Content padder>
          <View style={{flex: 1}}>
            <Text>A contact form will be embedded on this page.</Text>
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