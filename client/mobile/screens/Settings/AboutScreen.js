// todo: AboutScreen
import React from 'react';
import { StyleSheet, SectionList, Image, View } from 'react-native';
import { Container, Content, Text } from 'native-base';
import Section from '../../utils/SectionsUtility';
import SectionHeader from '../../components/SectionHeader';
import AboutPageSection from '../../components/AboutPageSection';

const whatWeOffer = [
  {
    id: 0,
    title: 'Markets',
    text: 'Use the interactive map to find 35 + local farmers markets, access market schedules, and get directions with just one tap.'
  },
  {
    id: 1,
    title: 'Recipes',
    text: 'Browse over 250 healthy and delicious recipes by category or ingredient.Detailed nutrition information included.'
  },
  {
    id: 2,
    title: 'Parks',
    text: 'Locate more than 400 parks across town.Each listing includes park features, hours, and turn - by - turn directions.'
  }, {
    id: 3,
    title: 'Active',
    text: 'Fun physical activities organized from A to Z.A great way to find free and low - cost ways to stay active with family and friends.'
  }, {
    id: 4,
    title: 'Events',
    text: 'Fill your free time with these free and low - cost things to do all over town.Add event details to your calendar with just a tap.'
  }, {
    id: 5,
    title: 'Resources',
    text: 'Content goes here…sed aliquet nibh a feugiat aliquam.Phasellus eleifend posuere quam vel auctor.Maecenas odio ante, sodales eu rhoncus vitae, lobortis hasellus sit amet laoreet odio.'
  }, {
    id: 6,
    title: 'Subsribe',
    text: 'Content goes here…sed aliquet nibh a feugiat aliquam.Phasellus eleifend posuere quam vel auctor.Maecenas odio ante, sodales eu rhoncus vitae, lobortis hasellus sit amet laoreet odio.'
  },
];

const whoWeAre = [
  {
    id: 0,
    title: 'Maricopa County',
    text: 'Good health starts with a download.The Maricopa Healthy app is a joint project between Maricopa County Department of Public Health and the AZ Health Zone.The app was created to help county residents and visitors find local farmers markets, delicious recipes and fun ways to stay physically active.'
  },
  {
    id: 1,
    title: 'AZ Health Zone',
    text: 'This material was funded by USDA’s Supplemental Nutrition Assistance Program(SNAP) through the AZ Health Zone.This institution is an equal opportunity provider.'
  }
];

const licenses = [
  {
    id: 0,
    title: 'Product Name Goes Here',
    text: 'Name Goes Here Copyright notice and other production info listed here…sed aliquet nibh a feugiat aliquam.Phasellus eleifend posuere quam vel auctor.Maecenas odio ante, sodales eu rhoncus vitae, lobortis et odio.Phasellus sit amet laoreet odio.'
  },
  {
    id: 1,
    title: 'Product Name Goes Here',
    text: 'Name Goes Here Copyright notice and other production info listed here…sed aliquet nibh a feugiat aliquam.Phasellus eleifend posuere quam vel auctor.Maecenas odio ante, sodales eu rhoncus vitae, lobortis et odio.Phasellus sit amet laoreet odio.'
  },
  {
    id: 2,
    title: 'Product Name Goes Here',
    text: 'Name Goes Here Copyright notice and other production info listed here…sed aliquet nibh a feugiat aliquam.Phasellus eleifend posuere quam vel auctor.Maecenas odio ante, sodales eu rhoncus vitae, lobortis et odio.Phasellus sit amet laoreet odio.'
  },
];

const sections = [
  Section('What We Offer', whatWeOffer, ({ item }) => {
    return (
      <AboutPageSection title={item.title} text={item.text} />
    );
  }),
  Section('Who We Are', whoWeAre, ({ item }) => {
    return (
      <AboutPageSection title={item.title} text={item.text} />
    );
  }),
  Section('Licenses', licenses, ({ item }) => {
    return (
      <AboutPageSection title={item.title} text={item.text} />
    );
  }),
];

const extractKey = ({ id }) => id

/**
 * About Page for Maricopa Healthy Program.
 */
export default class AboutScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content>
          <View
            style={{
              flex: 2,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <Image source={require("../../assets/logos/loading/about-mh-logo-color.png")}/>
            <Text style={{ fontSize: 24, marginTop: 25 }}>Version 0.0.3 and Build 172</Text>
          </View>
          <Text style={{margin: 15}}>
            Good health starts with a download. Maricopa Healthy was created to help county residents and visitors find local farmers markets, delicious recipes and fun ways to stay physically active. Maricopa Healthy is an initiative of the Maricopa County Department of Public Health.
          </Text>
          <SectionList
            sections={sections}
            renderSectionHeader={SectionHeader}
            keyExtractor={extractKey}
          />
          </Content>
        </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});