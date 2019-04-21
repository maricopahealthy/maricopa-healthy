// todo: EventsScreen
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import EventListItem from '../../components/EventListItem';

/**
 * Events resource home page displaying upcoming events.
 */
export default class EventsScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content style={{ flex: 1 }}>
            <FlatList
                data={[
                  {key: 0, title: 'Event Name 1', time: '10:00 AM', price: 'FREE'},
                  {key: 1, title: 'Event Name 2', time: '6:30 PM', price: '$25.00'},
                  {key: 2, title: 'Event Name 3', time: '8:00 PM', price: '$25.00'},
                ]}
                renderItem={({item}) => <EventListItem item={item} />}
            />
          </Content>
        </Container>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});