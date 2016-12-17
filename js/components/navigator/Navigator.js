import React, { Component } from 'react';
import { NavigationExperimental, StyleSheet } from 'react-native';
// import Scene from './Scene';
import Login from '../login/Login';

const { CardStack: NavigationCardStack } = NavigationExperimental;
const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  }
});

export default class Navigator extends Component {

  // This sets up the methods (e.g. Pop, Push) for navigation.
  constructor(props, context) {
    super(props, context);

    this.onPushRoute = this.props.onNavigationChange.bind(null, 'push');
    this.onPopRoute = this.props.onNavigationChange.bind(null, 'pop');
    this.renderScene = this.renderScene.bind(this);
  }

  // Now we finally get to use the `NavigationCardStack` to render the scenes.
  render() {
    return (
      <NavigationCardStack
        onNavigateBack={this.onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this.renderScene}
        style={styles.navigator}
        />
    );
  }

  // Render a scene for route.
  // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
  // as type `NavigationSceneRendererProps`.
  // Here you could choose to render a different component for each route, but
  // we'll keep it simple.
  renderScene(sceneProps) {
    return (
      <Login
        route={sceneProps.scene.route}
        onPushRoute={this.onPushRoute}
        onPopRoute={this.onPopRoute}
        onExit={this.props.onExit}
      />
    );
  }
}