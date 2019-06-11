import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button, Header, Icon, Item, Input, Text } from "native-base";
import {updateSearch} from "../../actions/searchActions";
import {connect} from "react-redux"

/**
 * NavigationalHeaderSearch renders the navigationOptions header component shared across the 'Home' screen (ie - landing page) of all App Features.
 * It is not necessary to pass in navigation prop explicitly.
 *
 * @param {string} title - the name of the resource to display in the center of the navbar.
 * @returns - a functional component wrapped by Higher-order component: withNavigation().
 */
class NavigationalHeaderSearch extends React.Component {
  render() {
    return (
      <Header searchBar rounded style={styles.color}>
        <Item style={{backgroundColor: "white"}}>
          <Image style={{marginLeft: 10}} source={require("../../assets/icons/icon-search.png")} />
          <Input placeholder="Enter your search keywords" value={this.props.search} onChangeText={(e) => this.props.updateSearch(e)} />
          {
            this.props.search.length > 0 ?
              <Button onPress={() => this.props.updateSearch("")} style={{ backgroundColor: "#8E8E93", height: "80%", marginTop: 4, marginRight: 8}}>
                <Text style={{ color: "white", fontSize: 12, fontWeight: "600", padding: 0, alignSelf: "center" }}>CLEAR</Text>
              </Button>
            :
              null
          }

        </Item>
        <Button onPress={() => this.props.navigation.navigate("Home")} transparent>
          <Image source={require("../../assets/icons/icon-close-x.png")} />
        </Button>
      </Header>
    )
  }
}

const mapStateToProps = ({search}) => {
  return {
    search: search.search
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateSearch: (newSearch) => {
      dispatch (
        updateSearch(newSearch)
      )
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(NavigationalHeaderSearch))

const styles = StyleSheet.create({
  color: {
    backgroundColor: "#FBA208"
  }
});