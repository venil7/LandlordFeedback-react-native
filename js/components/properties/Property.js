import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../common/styles';

export default class Property extends Component {

  render() {
    const { property } = this.props;
    return (
      <View>
        <Text style={styles.row}>
          property: {property}
        </Text>
      </View>
    );
  }
};