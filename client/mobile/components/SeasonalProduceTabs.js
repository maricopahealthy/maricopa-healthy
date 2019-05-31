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

    const produce = this.props.item;
    const tab = this.state.produceTab;

    const buttons = ["Spring", "Summer", "Fall", "Winter"].map((season, ind) => {
      return (
        <Button
          key={ind}
          style={tab === season ? { ...styles.button, backgroundColor: "#667747" } : { ...styles.button, backgroundColor: "#E5E5EA" }}
          onPress={() => {
            this._changeProduceTab(season)
          }}
        >
          <Text style={tab === season ? { color: "white" } : { color: "black" }}>
            {season}
          </Text>
        </Button>
      )
    });
    let produceText = "";
    for (let i = 0; i < produce[tab].length; i++) {
      i === 0 ? produceText += produce[tab][0] : produceText += ", " + produce[tab][i]
    }
    return (
      <>
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
          {buttons}
        </View>
        <Text style={{margin: 10}}>
          {produceText}
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