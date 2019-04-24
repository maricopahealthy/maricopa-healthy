// todo: SearchScreen
// note: SearchResultsList component
import React from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

/**
 * Component corresponds to the App level search functionality. Results are shown for all text matches across all resources.
 */
export default class SearchScreen extends React.Component {

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Icon name="ios-close" />
          </Button>
        </Header>
      </Container>
    )
  }
}