// todo: ResourceCard
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

/**
 * ResourceCard is a presentational component used for displaying the features available for exploration from the Home Screen.
 */
const ResourceCard = (props) => {

  return (
      <Card>
        <CardItem
            button
            onPress={() => props.navigation.navigate(props.item.resource)}
        >
          <Body>
            <Text>This is a sample card for {props.item.resource}</Text>
          </Body>
        </CardItem>
      </Card>
  );
};

// withNavigation returns a component that wraps ResourceCard and passes in the
// navigation prop automatically. It behaves like connect() function in Redux.
export default withNavigation(ResourceCard);

const styles = StyleSheet.create({

})