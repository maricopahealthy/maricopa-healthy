import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {connect} from "react-redux";
import {Container, Content, Card, CardItem, Left, Thumbnail, Body, Right, Icon, Text, Button} from 'native-base';
import BlockButton from "../../components/BlockButton";

/**
 * Resources Screen for viewing individual resource records.
 */
class ResourcesRecordScreen extends React.Component {

  render() {
    const {resource} = this.props;
    return (
      <Container>
        <Content padder>
          <Card transparent>
            <CardItem>
              <Thumbnail
                large
                source={require("../../assets/thumbnails/resources/resources-thumb-placeholder-01.png")}
              />
              <Body style={{justifyContent: "center", marginLeft: 15}}>
                <Text>{resource.name}</Text>
              </Body>
              <Icon name='heart-empty'/>
            </CardItem>
          </Card>
          {/* Content */}
          <View>
            <Text>{resource.description}</Text>
            <FlatList
              data={[
                {key: "0", text: '\u2022 Baseball field'},
                {key: "1", text: '\u2022 Basketball court'},
                {key: "2", text: '\u2022 Drinking fountains'},
                {key: "3", text: '\u2022 Exercise/Fitness station'},
              ]}
              renderItem={({item}) => <Text>{item.text}</Text>}
            />
            <Text>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A
              small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful
              Pointing has no control about the blind texts it is an almost unorthographic life.
            </Text>
          </View>
          {/* Button */}
          <View style={{flex: 1}}>
            <BlockButton
              title="Learn More"
              onPress={() => {}}
            />
          </View>
        </Content>
      </Container>
    )
  }
}

function mapStateToProps({resources}, ownProps) {
  const {navigation} = ownProps;
  return {
    resource: resources.byId[navigation.getParam("id")]
  };
}

export default connect(mapStateToProps, null)(ResourcesRecordScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});