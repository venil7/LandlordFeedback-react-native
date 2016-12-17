import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import TappableRow from '../common/TappableRow';
import User from '../user/User';
import styles from '../common/styles';

import { HELLO } from 'react-native-dotenv'

export default class Scene extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <User />
        <Text style={styles.row}>
          {HELLO}: {this.props.route.key}
        </Text>
        <TappableRow
          text="Tap me to load the next scene"
          onPress={this.props.onPushRoute}
        />
        <TappableRow
          text="Tap me to go back"
          onPress={this.props.onPopRoute}
        />
      </ScrollView>
    );
  }
}