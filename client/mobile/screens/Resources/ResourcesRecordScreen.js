// todo: ResourcesRecordScreen
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Left, Thumbnail, Body, Right, Icon, Text } from 'native-base';

/**
 * Resources Screen for viewing individual resource records.
 */
export default class ResourcesRecordScreen extends React.Component {

  render() {
    return (
      <Container>
        <Content padder>
          <Card transparent>
            <CardItem>
              <Left>
                <Thumbnail />
                <Body>
                  <Text>Az Health Zone</Text>
                </Body>
              </Left>
              <Right>
                <Icon name='heart-empty' />
              </Right>
            </CardItem>
          </Card>
          {/* Content */}
          <View>
            <Text>A description of the resource goes here to replace the following placeholder text. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts:</Text>
            <FlatList
                data={[
                  {key: 0, text: '\u2022 Baseball field'},
                  {key: 1, text: '\u2022 Basketball court'},
                  {key: 2, text: '\u2022 Drinking fountains'},
                  {key: 3, text: '\u2022 Exercise/Fitness station'},
                ]}
                renderItem={({item}) => <Text>{item.text}</Text>}
            />
            <Text>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</Text>
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