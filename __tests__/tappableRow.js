import 'react-native';
import React from 'react';
import TappableRow from '../js/components/common/TappableRow';
import renderer from 'react-test-renderer';

it('Renders <TappableRow /> correctly', () => {
  const tree = renderer.create(
    <TappableRow onPress={() => { }} text="text" />
  );
});
