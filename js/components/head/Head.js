import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { StyleSheet, PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from '@remobile/react-native-toast';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#252526'
  },
  menuButton: {
    marginTop: 10,
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
  handleMenu() {
    Toast.show("this will open menu");
  }

  render() {
    const { user: { name, photo }} = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.menuButton}
          onPress={() => this.handleMenu()}>
          <Icon
            name="list"
            size={30}
            color="darkkhaki" />
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