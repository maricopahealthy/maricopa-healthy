import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';

/**
 * Displays Maricopa Healthy Terms of Service information.
 */
export default class TermsOfServiceScreen extends React.Component {

  render() {
    return (
      <Container>
        <Content padder>
          <View style={{flex: 1}}>
            <Text>Terms of Service will be drafted and added to this page.</Text>
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