// todo: EventsRecordScreen
import React from 'react';
import { View, SectionList, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Left, Thumbnail, Body, Text, Right, Icon, ListItem, Button } from "native-base";
import Section from '../../utils/SectionsUtility';
import SectionHeader from '../../components/SectionHeader';

// Used for sample data ==================================
const detailsData = [
  {id: 0, description: 'Explore the food sources found in the Sonoran Desert with Master Gardeners. Local plants supply food for not only desert animals in the ecosystem but also for humans. Learn about the plants in our area, how different parts were used as sustenance and cautions that need to be taken when preparing them. Participants receive take-home information that includes how to grow edibles in your back yard.'},
];

const locationData = [
  {id: 0, where: 'San Tan Mountain Regional Park 6533 W. Phillips Road Queen Creek, AZ 85142'},
];

// remove above =============================================

// sections to display for Event Record
const sections = [
    Section('Details', detailsData, ({item}) => {
      return (
          <ListItem>
            <Text>{item.description}</Text>
          </ListItem>
      );
    }),
    Section('Where', locationData, ({item}) => {
      return (
          <ListItem>
            <Text>{item.where}</Text>
          </ListItem>
      );
    }),
];

/**
 * Summary view for viewing individual Event record.
 */
export default class EventsRecordScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail />
                  <Body>
                    <Text>Master Gardeners Series</Text>
                    <Text note>Time</Text>
                  </Body>
                </Left>
                <Right>
                  <Icon name='heart-empty' />
                </Right>
              </CardItem>
            </Card>
            {/* Section information */}
            <SectionList
                sections={sections}
                renderSectionHeader={SectionHeader}
                keyExtractor={extractKey}
            />
            <View style={{ flex: 1 }}>
              <Button
                  block
                  danger
                  onPress={() => {}}
              >
                <Text>Learn More</Text>
              </Button>
            </View>
          </Content>
        </Container>
    )
  }
}

/**
 * returns a unique id property for generating the necessary 'key' of a react list.
 * @param id
 * @returns {*}
 */
const extractKey = ({id}) => id;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});