import React from 'react'
import ActiveScreen from "../../screens/Active/ActiveScreen"
import ActiveFilterScreen from "../../screens/Active/ActiveFilterScreen";
import ActiveListScreen from "../../screens/Active/ActiveListScreen";

import NavigationalHeaderHome from "../../components/navigation-headers/NavigationalHeaderHome";
import NavigationalHeaderFilter from "../../components/navigation-headers/NavigationalHeaderFilter";
import NavigationalHeaderRecord from "../../components/navigation-headers/NavigationalHeaderRecord";

export default {

  ActiveList: {
    screen: ActiveListScreen,
    navigationOptions: {
      header: <NavigationalHeaderHome title="Active" filterScreenRoute="ActiveFilter" />
    }
  },

  ActiveFilter: {
    screen: ActiveFilterScreen,
    navigationOptions: {
      header: <NavigationalHeaderFilter />
    }
  },

  Active: {
    screen: ActiveScreen,
    navigationOptions: {
      header: <NavigationalHeaderRecord />
    }
  },

}
// todo Add Active Map Screen and Active Learn More Screen