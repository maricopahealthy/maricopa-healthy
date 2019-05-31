// todo: NotificationsScreen
import React from 'react';
import { StyleSheet } from "react-native";
import { Container, Content, ListItem, Text } from 'native-base';
import SettingsSlider from '../../components/SettingsSlider'
import SettingsListButton from '../../components/SettingsListButton'

/**
 * Displays User's active notifications.
 */
export default class NotificationsSettingsScreen extends React.Component {

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <SettingsSlider style={{marginTop: 30, marginBottom: 30}} title={"Allow Notifications"} borderTop={true} />
          <ListItem itemDivider>
            <Text>ALERTS</Text>
          </ListItem>

          {/* //todo add alert styles picker */}
          <SettingsListButton title={"Banner Style"} option={"Temporary"} borderTop={true} />

          <SettingsSlider style={{ marginTop: 30 }} title={"Sounds"} borderTop={true} />
          <SettingsSlider style={{marginBottom: 30 }} title={"Badges"} borderTop={false} />

          <ListItem itemDivider>
            <Text>OPTIONS</Text>
          </ListItem>
          <SettingsListButton title={"Show Previews"} option={"Always (Default)"} borderTop={true} />
          <SettingsListButton title={"Notifcation Grouping"} option={"Automatic"} borderTop={false} />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4"
  },
});