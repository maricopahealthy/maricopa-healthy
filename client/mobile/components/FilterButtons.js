import React from 'react';
import { StyleSheet, View } from 'react-native'
import { Text, Button, } from 'native-base';

export default class FilterButtons extends React.Component {
  state = {
    filter: ['Anthem']
  }
  
  _changeState = (filterItem) => {
    if(this.state.filter.includes(filterItem)) {
      this.setState({filter: this.state.filter.filter(item => item !== filterItem)})
    } else {
      this.setState((prevState) => {
        return { filter: [...prevState.filter, filterItem ]}
      })
    }
  }
  render() {
    const buttons = this.props.item.item.data.map(item => {
      active = this.state.filter.includes(item.text)
      return (
        <Button disabled={this.props.disabled} style={active ? { backgroundColor: "grey", ...styles.button } : { backgroundColor: "#E5E5EA", ...styles.button}}
          key={item.id}
          onPress={() => {
            this._changeState(item.text)
          }}
        >
          <Text style={{color: "black"}}>
            {item.text}
          </Text>
        </Button>
      )
    })

    return (
      <View style={styles.container}>
        {buttons}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row"
  },
  button: {
    margin: 5,
    height: 30,
    fontSize: 20
  }
});