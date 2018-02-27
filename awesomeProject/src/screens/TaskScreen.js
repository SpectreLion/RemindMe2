/*
*TaskScreen
*/

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import TaskHeader from './../components/TaskHeader';
import TaskBody from './../components/TaskBody';

export default class TaskScreen extends Component<props> {

  constructor(props){
      super(props);
        this.state = {
          tasks: [
            { id: 1, title:'Leche', completed: false },
            { id: 2, title:'Basura', completed: false },
            { id: 3, title:'Platos', completed: false },
            { id: 4, title:'Fiesta', completed: false },
          ]
        }
      }

  render(){
    return (
      <View style={ styles.container }>
        <TaskHeader toBeCompleted={6}/>
        <View style={ styles.tasksContainer }>
           <TaskBody tasks={this.state.tasks}/>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },tasksContainer: {
    backgroundColor: 'green',
    flex: 1
  }
});
