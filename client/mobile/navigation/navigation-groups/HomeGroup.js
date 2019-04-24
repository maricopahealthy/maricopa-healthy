import React from 'react'
import HomeScreen from "../../screens/HomeScreen";
import SearchScreen from "../../screens/SearchScreen";

import NavigationalHeaderHomeScreen from "../../components/navigation-headers/NavigationalHeaderHomeScreen";
import NavigationalHeaderFilter from "../../components/navigation-headers/NavigationalHeaderFilter";

export default {

  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: <NavigationalHeaderHomeScreen title="Home" screenRoute="Search" />
    }
  },

  Search: {
    screen: SearchScreen,
    navigationOptions: {
      header: <NavigationalHeaderFilter />
    }
  },
}