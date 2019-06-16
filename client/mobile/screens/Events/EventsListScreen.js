import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {Container, Content} from "native-base";
import {connect} from "react-redux";
import {fetchEvents} from "../../actions/eventsActions";
import EventListItem from "../../components/EventListItem";

/**
 * Events resource home page displaying list of upcoming events.
 */
class EventsListScreen extends React.Component {
  componentWillMount() {
    this.props.fetchEvents();
  }

  render() {

    const filteredEvents = () => {
      const {events, filter} = this.props;

      if(filter.apply) {
        let newEvents = events;
        for (let type in filter) {
          if(filter[type].length) {
            newEvents = newEvents.filter(event => filter[type].includes(event[type]))
          }
        }
        return newEvents;
      } else {
        return events
      }
    };

    return (
      <Container>
        <Content style={{flex: 1}}>
          <FlatList
            data={filteredEvents()}
            renderItem={({item, index}) => <EventListItem item={item} index={index}/>}
            keyExtractor={(item) => item.id.toString()}
          />
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({events, filter}) {
  return {
    events: events.allIds.map(id => events.byId[id]),
    isFetching: events.isFetching,
    filter
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
