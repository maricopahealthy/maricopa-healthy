import React from 'react'
import ParksScreen from "../../screens/Parks/ParksScreen"
import ParksFilterScreen from "../../screens/Parks/ParksFilterScreen";
import ParksListScreen from "../../screens/Parks/ParksListScreen";

import NavigationalHeaderHome from "../../components/navigation-headers/NavigationalHeaderHome";
import NavigationalHeaderFilter from "../../components/navigation-headers/NavigationalHeaderFilter";
import NavigationalHeaderRecord from "../../components/navigation-headers/NavigationalHeaderRecord";

export default {

  ParksList: {
    screen: ParksListScreen,
    navigationOptions: {
      header: <NavigationalHeaderHome title="Parks" filterScreenRoute="ParksFilter" />
    }
  },

  ParksFilter: {
    screen: ParksFilterScreen,
    navigationOptions: {
      header: <NavigationalHeaderFilter />
    }
  },

  Parks: {
    screen: ParksScreen,
    navigationOptions: {
      header: <NavigationalHeaderRecord />
    }
  },

}
// todo Add Parks Map Screen and Parks Learn More Screen