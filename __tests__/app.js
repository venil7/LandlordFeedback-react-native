import 'react-native';
import React from 'react';
import App from '../js/components/app/App';
import renderer from 'react-test-renderer';

it('Renders <App /> correctly', () => {
  const tree = renderer.create(
    <App />
  );
});
