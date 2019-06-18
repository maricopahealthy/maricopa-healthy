import React from 'react';
import { Text } from 'react-native';

export class ProText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'source-sans-pro' }]} />;
  }
}

export class BoldText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'source-sans-pro-semi-bold' }]} />;
  }
}
