// todo: NotificationsScreen
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Content, Text} from "native-base";
import {withNavigation} from "react-navigation";

/**
 * Primary Screen for managing User's subscriptions.
 */
class NotificationsScreen extends React.Component {

  render() {
    return (
      <Container>
        <Content>
          <Text style={{marginTop: 15, textAlign: "center", fontSize: 20}}>You don’t have any notifications.</Text>
          <View>
            <Text style={{margin: 15}}>
              <Text>Be in the know! </Text>
              <Text
                onPress={() => this.props.navigation.navigate("NotificationsSettings")}
                style={{ color: "#B52126" }}
              >
                Enable push notifications
              </Text>
              <Text> on your device and get alerts about special events, promotions and other important info.</Text>
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(NotificationsScreen);

const styles = StyleSheet.create({

});
