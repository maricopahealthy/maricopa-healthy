// todo: SearchScreen
// note: SearchResultsList component
import React from 'react';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';

const results = [
  { key: 'Market1', record: 'Market 1' },
  { key: 'Market2', record: 'Market 2' },
  { key: 'Park1', record: 'Park 1' },
  { key: 'Recipe1', record: 'Recipe 1' },
  { key: 'Activity1', record: 'Activity 1' },
  { key: 'Activity2', record: 'Activity 2' }
]

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
        <View>
          {/* //todo Make search results dynamic */}
          {/* //todo Make search results bring you to individual record */}
          <FlatList
            data={results}
            renderItem={({ item }) => <RecordTile item={item} type="Markets" />}
          />
        </View>
      </Container>
    )
  }
}