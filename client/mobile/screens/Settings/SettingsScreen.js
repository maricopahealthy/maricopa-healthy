// todo: SettingsHomeScreen
// note: NavigationCard component
import React from 'react';
import { withNavigation } from 'react-navigation';
import {
  View, FlatList, StyleSheet
} from "react-native";
import { Text, Container} from 'native-base'
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
      <View style={styles.container}>
        <Text 
          onPress={() => navigation.navigate("Login")} 
          style={{ color: "#B52126", fontSize: 20, textAlign: "center"}}
          >
            Log In to Maricopa Healthy Account
        </Text>
        <Text style={{textAlign: "center", marginTop: 10}}>
          <Text>Don't have one? </Text> 
          <Text
            onPress={() => navigation.navigate("SignUp")} 
            style={{ color: "#B52126" }}
            > 
              Sign up today.
            </Text>
        </Text>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F6F6",
    padding: 20,
  }
});