import React from 'react'
import EventsRecordScreen from "../../screens/Events/EventsRecordScreen";
import EventsFilterScreen from "../../screens/Events/EventsFilter";
import EventsListScreen from "../../screens/Events/EventsListScreen";
// navigation headers
import NavigationalHeaderHome from "../../components/navigation-headers/NavigationalHeaderHome";
import NavigationalHeaderFilter from "../../components/navigation-headers/NavigationalHeaderFilter";
import NavigationalHeaderRecord from "../../components/navigation-headers/NavigationalHeaderRecord";

export default {

  EventsList: {
    screen: EventsListScreen,
    navigationOptions: {
      header: <NavigationalHeaderHome title="Events" filterScreenRoute="EventsFilter"/>
    }
  },

  EventsFilter: {
    screen: EventsFilterScreen,
    navigationOptions: {
      header: <NavigationalHeaderFilter />
    }
  },

  EventsRecord: {
    screen: EventsRecordScreen,
    navigationOptions: {
      header: <NavigationalHeaderRecord />
    }
  },

}