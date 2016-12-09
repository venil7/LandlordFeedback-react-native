import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './js/store';
import App from './js/components/app/App'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const store = createStore();

export default class LandlordFeedback extends Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LandlordFeedback', () => LandlordFeedback);
