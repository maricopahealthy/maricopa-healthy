// todo: SettingsHomeScreen
// note: NavigationCard component
import React from 'react';
import { withNavigation } from 'react-navigation';
import {
  View, FlatList
} from "react-native";
import { H3, ListItem, Icon, Left, Right } from 'native-base'
import SettingsTile from '../../components/SettingsTile';

const loggedInSettings = [
  { key: 'profile', name: 'Profile', route: "Profile", icon: "ios-person" },
  { key: 'favorites', name: 'Favorites', route: "Favorites", icon: "ios-heart" },
  { key: 'notifications', name: 'Notifications', route: "Notifications", icon: "ios-notifications" },
  { key: 'meetup', name: 'Meetup', route: "Meetup", icon: "ios-people" },
  { key: 'subscribe', name: 'Subscribe', route: "Subscribe", icon: "ios-list" }
]

const loggedOutSettings = [
  { key: 'about', name: 'About', route: "About", icon: "ios-help" },
  { key: 'contact', name: 'Contact', route: "Contact", icon: "ios-mail" },
  { key: 'privacy policy', name: 'Privacy Policy', route: "PrivacyPolicy", icon: "ios-lock" },
  { key: 'terms of service', name: 'Terms Of Service', route: "TermsOfService", icon: "ios-document" }
]

/**
 * Primary Settings Screen from which User can access all their Settings and information.
 */
const SettingsHomeScreen =({navigation}) => {
  return (
    <View>
      <FlatList
        data={loggedInSettings}
        renderItem={({ item }) => 
          <SettingsTile icon={item.icon} route={item.route} name={item.name} />
        }
      />
      <View>
        {/* //todo add prompt to login/make account */}
        <H3>Login or make an account to access profile features.</H3>
      </View>
      <FlatList
        data={loggedOutSettings}
        renderItem={({ item }) =>
          <SettingsTile icon={item.icon} route={item.route} name={item.name} />
        }
      />
    </View>
  )
}

export default withNavigation(SettingsHomeScreen);