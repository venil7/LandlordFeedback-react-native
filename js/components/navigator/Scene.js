import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import TappableRow from '../common/TappableRow';
import Head from '../head/Head';
import styles from '../common/styles';
import { MenuContext } from 'react-native-popup-menu';

// import { HELLO } from 'react-native-dotenv'

export default class Scene extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <MenuContext>
          <Head />
          <Text style={styles.row}>
            route: {this.props.route.key}
          </Text>
          <TappableRow
            text="Tap me to load the next scene"
            onPress={this.props.onPushRoute}
            />
          <TappableRow
            text="Tap me to go back"
            onPress={this.props.onPopRoute}
            />
        </MenuContext>
      </ScrollView>
    );
  }
}