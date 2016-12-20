import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import TappableRow from '../common/TappableRow';
import Head from '../head/Head';
import styles from '../common/styles';
import { MenuContext } from 'react-native-popup-menu';
import { connect } from 'react-redux';
import * as routing from '../../actions/routing.js'
// import { HELLO } from 'react-native-dotenv'

class Scene extends Component {

  navigateForward() {
    const { dispatch } = this.props;
    dispatch(routing.push({ key: '123' + Math.random() }));
  }

  navigateBack() {
    const { dispatch } = this.props;
    dispatch(routing.pop());
  }

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
            onPress={() => this.navigateForward()}
            />
          <TappableRow
            text="Tap me to go back"
            onPress={() =>this.navigateBack()}
            />
        </MenuContext>
      </ScrollView>
    );
  }
};

export default connect()(Scene);