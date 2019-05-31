import React from "react";
import {FlatList, StyleSheet} from "react-native";
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
    return (
      <Container>
        <Content style={{flex: 1}}>
          <FlatList
            data={this.props.events}
            renderItem={({item, index}) => <EventListItem item={item} index={index}/>}
          />
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({events}) {
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
