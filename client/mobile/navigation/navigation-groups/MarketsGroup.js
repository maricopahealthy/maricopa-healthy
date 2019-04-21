import React from 'react'
import MarketsScreen from "../../screens/Markets/MarketsScreen"
import MarketsFilterScreen from "../../screens/Markets/MarketsFilterScreen";
import MarketsListScreen from "../../screens/Markets/MarketsListScreen";

import NavigationalHeaderHome from "../../components/navigation-headers/NavigationalHeaderHome";
import NavigationalHeaderFilter from "../../components/navigation-headers/NavigationalHeaderFilter";
import NavigationalHeaderRecord from "../../components/navigation-headers/NavigationalHeaderRecord";

export default {

  MarketsList: {
    screen: MarketsListScreen,
    navigationOptions: {
      header: <NavigationalHeaderHome title="Markets" filterScreenRoute="MarketsFilter" />
    }
  },

  MarketsFilter: {
    screen: MarketsFilterScreen,
    navigationOptions: {
      header: <NavigationalHeaderFilter />
    }
  },

  Markets: {
    screen: MarketsScreen,
    navigationOptions: {
      header: <NavigationalHeaderRecord />
    }
  },

}
// todo Add Markets Map Screen and Markets Learn More Screen