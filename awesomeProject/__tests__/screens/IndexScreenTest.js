import 'react-native';
import React from 'react';

//Importar componente
import IntroScreen from '../../src/screens/IntroScreen';
import render from 'react-test-render';
describe('IntroScreen Component', () => {
  it('Should run a test to check a number', () => {
    const IntroScreenComponent = render.create(<IntroScreen/>).toJson();
    expect(IntroScreenComponent).toMatchSnapshot();
  });
});
