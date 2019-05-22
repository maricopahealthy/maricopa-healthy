import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Container, Content } from "native-base";
import { connect } from "react-redux";
import { fetchEvents } from "../../actions/eventsActions";
import EventListItem from "../../components/EventListItem";

/**
 * Events resource home page displaying list of upcoming events.
 */
class EventsListScreen extends React.Component {
  componentWillMount() {
    this.props.fetchEvents();
  }

  render() {
    console.log("EventsListScreen props: ", JSON.stringify(this.props.events));
    return (
      <Container>
        <Content style={{ flex: 1 }}>
          <FlatList
            // data={[
            //   {key: 0, title: 'Event Name 1', time: '10:00 AM', price: 'FREE'},
            //   {key: 1, title: 'Event Name 2', time: '6:30 PM', price: '$25.00'},
            //   {key: 2, title: 'Event Name 3', time: '8:00 PM', price: '$25.00'},
            // ]}
            data={this.props.events}
            renderItem={({ item }) => <EventListItem item={item} />}
          />
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({ events }) {
  return {
    events: events.allIds.map(id => events.byId[id]),
    isFetching: events.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
