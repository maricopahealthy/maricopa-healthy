import React from 'react';
import ResourcesListScreen from "../../screens/Resources/ResourcesListScreen";
import ResourcesRecordScreen from "../../screens/Resources/ResourcesRecordScreen";
// navigation headers
import NavigationalHeaderHome from "../../components/navigation-headers/NavigationalHeaderHome";
import NavigationalHeaderRecord from "../../components/navigation-headers/NavigationalHeaderRecord";

export default {

  ResourcesList: {
    screen: ResourcesListScreen,
    navigationOptions: {
      header: <NavigationalHeaderHome title="Resources" filterScreenRoute="" />
    }
  },

  ResourcesRecord: {
    screen: ResourcesRecordScreen,
    navigationalOptions: {
      header: <NavigationalHeaderRecord />
    }
  },

};