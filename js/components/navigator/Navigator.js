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

  onPopRoute() {
    alert('back');
  }

  // Now we finally get to use the `NavigationCardStack` to render the scenes.
  render() {
    const { navigationState } = this.props;
    return (
      <NavigationCardStack
        onNavigateBack={() => this.onPopRoute()}
        navigationState={navigationState}
        renderScene={(sceneProps) => this.renderScene(sceneProps)}
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

    return (
      <Scene
        route={sceneProps.scene.route}
      />
    );
  }
}

export default connect(({ user: state }) => ({
  user: state.user
}))(Navigator);