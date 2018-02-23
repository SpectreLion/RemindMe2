/**
 * RemindMe App
 * React Native Application for iOS and Android
 * @flow
 */
//sin {} importa default, con { Componente } de la clase
 import React, {Component} from 'react';
 import {
   View,
   StyleSheet
 } from 'react-native';

import { StackNavigator } from 'react-navigation';
//Screens
import IntroScreen from './screens/IntroScreen';
import TaskScreen from './screens/TaskScreen';

//Or export this...
const ScreenStack = StackNavigator(
  {
    Home: { screen: IntroScreen },
    Tasks: { screen: TaskScreen }
  },
  {
    headerMode: 'none'
  }
);

export default class App extends Component{
  render() {
    return <ScreenStack/>
  }
}

const styles = StyleSheet.create({
  mainAppContainer: {
    flex: 1,
    backgroundColor: 'orange'
  }
});
