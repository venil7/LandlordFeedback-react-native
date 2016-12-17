import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../login/Login';
import Scene from './Scene';
import { NavigationExperimental, StyleSheet } from 'react-native';

const { CardStack: NavigationCardStack } = NavigationExperimental;
const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  }
});

class Navigator extends Component {

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
    const { user = null } = this.props;

    if (!user) {
      return (<Login />);
    }

    // console.log('route -->', sceneProps.scene.route);
    // console.log('user ==>', this.props.user);
    return (
      <Scene
        route={sceneProps.scene.route}
        onPushRoute={this.onPushRoute}
        onPopRoute={this.onPopRoute}
        onExit={this.props.onExit}
      />
    );
  }
}

export default connect(({ user: state }) => ({
  user: state.user
}))(Navigator);