import React from 'react'
import HomeScreen from "../../screens/HomeScreen";
import SearchScreen from "../../screens/SearchScreen";

import NavigationalHeaderHomeScreen from "../../components/navigation-headers/NavigationalHeaderHomeScreen";
import NavigationalHeaderSearch from '../../components/navigation-headers/NavigationalHeaderSearch';
import NotificationsScreen from "../../screens/NotificationsScreen";
import NavigationalHeaderBasic from "../../components/navigation-headers/NavigationalHeaderBasic";

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
      header: <NavigationalHeaderSearch />
    }
  },

  Notifications: {
    screen: NotificationsScreen,
    navigationOptions: {
      header: <NavigationalHeaderBasic title="Notifications" />
    }
  }
}