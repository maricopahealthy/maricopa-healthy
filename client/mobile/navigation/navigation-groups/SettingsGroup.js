import React from 'react'
import AboutScreen from "../../screens/Settings/AboutScreen";
import ContactInfoScreen from "../../screens/Settings/ContactInfoScreen";
import EditProfileScreen from "../../screens/Settings/EditProfileScreen";
import FavoritesScreen from "../../screens/Settings/FavoritesScreen";
import MeetupScreen from "../../screens/Settings/MeetupScreen";
import NotificationsSettingsScreen from "../../screens/Settings/NotificationsSettingsScreen";
import PrivacyPolicyScreen from "../../screens/Settings/PrivacyPolicyScreen";
import ProfileScreen from "../../screens/Settings/ProfileScreen";
import SettingsScreen from "../../screens/Settings/SettingsScreen";
import SubscribeRecipesScreen from "../../screens/Settings/SubscribeRecipesScreen";
import SubscribeScreen from "../../screens/Settings/SubscribeScreen";
import TermsOfServiceScreen from "../../screens/Settings/TermsOfServiceScreen";

import NavigationalHeaderBasic from "../../components/navigation-headers/NavigationalHeaderBasic";


export default {

  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      header: <NavigationalHeaderBasic title="Settings" />
    }
  },
  
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: <NavigationalHeaderBasic title="Profile" />    
    }
  },

  EditProfile: {
    screen: EditProfileScreen,
    navigationOptions: {
      header: <NavigationalHeaderBasic title="Edit Profile" />    
    }
  },

  Contact: {
    screen: ContactInfoScreen,
    navigationOptions: {
      header: <NavigationalHeaderBasic title="Contact" />
    }
  },

  About: {
    screen: AboutScreen,
    navigationOptions: {
      header: <NavigationalHeaderBasic title="About" />
    }
  },

  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      header: <NavigationalHeaderBasic title="Favorites" />
    }
  },

  Meetup: {
    screen: MeetupScreen,
    navigationOptions: {
      header: <NavigationalHeaderBasic title="Meetup" />
    }
  },

  NotificationsSettings: {
    screen: NotificationsSettingsScreen,
    navigationOptions: {
      header: <NavigationalHeaderBasic title="Notifications" />
    }
  },

  PrivacyPolicy: {
    screen: PrivacyPolicyScreen,
    navigationOptions: {
      header: <NavigationalHeaderBasic title="Privacy Policy" />
    }
  },

  TermsOfService: {
    screen: TermsOfServiceScreen,
    navigationOptions: {
      header: <NavigationalHeaderBasic title="Terms Of Service" />
    }
  },

  Subscribe: {
    screen: SubscribeScreen,
    navigationOptions: {
      header: <NavigationalHeaderBasic title="Subscribe" />
    }
  },

  SubscribeRecipes: {
    screen: SubscribeRecipesScreen,
    navigationOptions: {
      header: <NavigationalHeaderBasic title="Weekly Recipes" />
    }
  },


}