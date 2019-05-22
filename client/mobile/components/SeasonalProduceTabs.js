import React from 'react';
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'native-base';

export default class SeasonalProduceTabs extends React.Component {
  state = {
    produceTab: 'Spring'
  };

  _changeProduceTab = (season) => {
    this.setState({ produceTab: season })
  };
  render() {
    const buttons = this.props.item.data.map(season => {
      return (
        <Button
          key={season.id}
          style={this.state.produceTab === season.text ? { ...styles.button, backgroundColor: "#667747" } : { ...styles.button, backgroundColor: "#E5E5EA" }}
          onPress={() => {
            this._changeProduceTab(season.text)
          }}
        >
          <Text style={this.state.produceTab === season.text ? { color: "white" } : { color: "black" }}>
            {season.text}
          </Text>
        </Button>
      )
    });
    const produce = this.props.item.data.filter(season => season.text === this.state.produceTab)[0].produce;
    return (
      <>
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
          {buttons}
        </View>
        <Text style={{margin: 10}}>
          {produce}
        </Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  button : {
    height: 35
  }
});