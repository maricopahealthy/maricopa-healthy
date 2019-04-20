// todo: RecordTile
import React from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

/**
 * RecordTile is used for previewing different records.
 */
class RecordTile extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'URL' }} />
              </Left>
              <Body>
                <Text>{this.props.item.record}</Text>
                <Text note numberOfLines={1}>{this.props.item.record} Description</Text>
              </Body>
              <Right>
                <Button 
                  onPress={() => this.props.navigation.navigate(this.props.type)} 
                  transparent
                >
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(RecordTile);

const styles = StyleSheet.create({

})