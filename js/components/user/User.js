import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { StyleSheet, PixelRatio } from 'react-native';
// import styles from '../common/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  text: {
    marginTop: 15,
    marginRight: 2,
    fontWeight: 'bold'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5
  }
});


export class User extends Component {
  render() {
    const { user: { name, photo }} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {name}
        </Text>
        <Image
          source={{ uri: photo }}
          style={styles.image}
        />
      </View>
    );
  }
};

export default connect(({user: state}) => ({
  user: state.user
}))(User);