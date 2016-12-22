import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
// import TappableRow from '../common/TappableRow';
import Head from '../head/Head';
import styles from '../common/styles';
import { MenuContext } from 'react-native-popup-menu';
import { connect } from 'react-redux';
import * as properties from '../../actions/properties';
import Property from './Property';

class PropertiesScene extends Component {
  componentWillMount() {
    this.loadProperties();
  }

  loadProperties() {
    const { dispatch } = this.props;
    dispatch(properties.fetchLatest());
  }

  render() {
    const { properties } = this.props;
    return (
      <ScrollView style={styles.scrollView}>
        <MenuContext>
          <Head />
          <Text style={styles.row}>
            Recenty added properties:
          </Text>
          {properties.latestProperties
            .map((p, key) => <Property key={key} property={p} />)}
        </MenuContext>
      </ScrollView>
    );
  }
};

export default connect((state) => ({
  properties: state.properties
}))(PropertiesScene);