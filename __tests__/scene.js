import 'react-native';
import React from 'react';
import Scene from '../js/components/navigator/Scene';
import renderer from 'react-test-renderer';

it('Renders <Scene /> correctly', () => {
  const tree = renderer.create(
    <Scene
      route={{ key: 123 }}
      onPushRoute={() => { }}
      onPopRoute={() => { } }
    />
  );
});