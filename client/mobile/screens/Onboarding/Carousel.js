import React from 'react';
import {StyleSheet, View, ScrollView, Text, Dimensions} from "react-native";
import {Container, Button, Content} from 'native-base';

import OnboardingFavoritesScreen from './OnboardingFavoritesScreen';
import OnboardingFiltersScreen from "./OnboardingFiltersScreen";
import OnboardingNotificationsScreen from "./OnboardingNotificationsScreen";

var Device_Width = Dimensions.get("window").width;

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 1
    }
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.activeInterval = setInterval(this.scrolling, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.activeInterval);
  }

  scrolling = () => {
    if (this.state.screen === 3) {
      this.state.screen = 0;
    }
    this.ticker.scrollTo({x: this.state.screen * Device_Width});
    this.state.screen++;
  };

  render() {
    return (
        <Container>
          <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              ref={(ref) => this.ticker = ref}
          >
            <OnboardingFavoritesScreen/>
            <OnboardingFiltersScreen/>
            <OnboardingNotificationsScreen/>
          </ScrollView>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  BlockStyle: {
    backgroundColor: "#00BCD4",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: Device_Width
  },
  FirstBlockStyle: {
    backgroundColor: "#00BCD4",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: Device_Width
  }
});