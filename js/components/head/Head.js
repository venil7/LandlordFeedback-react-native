import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { StyleSheet, PixelRatio } from 'react-native';
// import styles from '../common/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#252526'
  },
  appName: {
    color: 'khaki',
    fontSize: 24,
    fontFamily: 'lobster',
    marginLeft: 5,
    marginTop: 8,
    flex: 1
  },
  userName: {
    marginTop: 15,
    marginRight: 2,
    fontWeight: 'bold',
    color: 'darkgrey'
  },
  image: {
    width: 50,
    height: 50,
  }
});


export class User extends Component {
  render() {
    const { user: { name, photo }} = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => { }}>
         <Text>
          some text
         </Text>
        </TouchableHighlight>
        <Text style={styles.appName}>
          Landlord Feedback
        </Text>
        <Text style={styles.userName}>
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