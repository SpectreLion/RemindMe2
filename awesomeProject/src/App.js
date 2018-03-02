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
import AddTaskModal from './modal/AddTaskModal';

//Or export this...
export default App = StackNavigator(
  {
    Home: { screen: IntroScreen },
    Tasks: { screen: TaskScreen }
  },
  {
    headerMode: 'none'
  }
);
