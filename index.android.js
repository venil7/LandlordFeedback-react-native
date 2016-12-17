import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import createStore from './js/store';
import App from './js/components/app/App'

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

AppRegistry.registerComponent('LandlordFeedback', () => LandlordFeedback);
