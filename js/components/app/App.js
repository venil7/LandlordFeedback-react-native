import React, { Component } from 'react';
import { NavigationExperimental } from 'react-native';
import Navigator from '../navigator/Navigator';

const { StateUtils: NavigationStateUtils } = NavigationExperimental;

export default class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      navigationState: {
        index: 0, // Starts with first route focused.
        routes: [{key: 'Home Scene'}], // Starts with only one route.
      },
    };
  }

  onNavigationChange(type: string): void {
    let { navigationState } = this.state;

    switch (type) {
      case 'push':
        const route = {key: 'Route-' + Date.now()};
        navigationState = NavigationStateUtils.push(navigationState, route);
        break;

      case 'pop':
        navigationState = NavigationStateUtils.pop(navigationState);
        break;
    }

    if (this.state.navigationState !== navigationState) {
      this.setState({navigationState});
    }
  }

  exit() {
    // on exit
  }

  render() {
    return (
      <Navigator
        navigationState={this.state.navigationState}
        onNavigationChange={(type) => this.onNavigationChange(type)}
        onExit={this.exit}
      />
    );
  }
}