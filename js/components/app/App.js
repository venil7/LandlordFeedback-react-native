import React, { Component } from 'react';
import { NavigationExperimental } from 'react-native';
import Navigator from '../navigator/Navigator';
import { connect } from 'react-redux';
import * as actions from '../../actions/routing'

const { StateUtils: NavigationStateUtils } = NavigationExperimental;

class App extends Component {
  onPush(key) {
    const { dispatch } = this.props;
    const route = { key };
    dispatch(actions.push(route));
  }

  onPop() {
    const { dispatch } = this.props;
    dispatch(actions.pop());
  }

  render() {
    const { routing: navigationState } = this.props;
    return (
      <Navigator
        navigationState={navigationState}
        onNavigationChange={(type) => this.onNavigationChange(type)}
        onPush={(key) => this.onPush(key)}
        onPop={() => this.onPop()}
      />
    );
  }
}

export default connect(({routing}) => {
  return { routing };
})(App);