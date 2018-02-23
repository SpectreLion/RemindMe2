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

export default class TaskScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      tasks: [
        { id: 1, title:'Leche', completed: false },
        { id: 2, title:'Basura', completed: false },
        { id: 3, title:'Platos', completed: false },
        { id: 4, title:'Fiesta', completed: false }
      ]
    }
  }
  renderTask(){
    return(
      this.state.tasks.map( (task)=>{
        return(
          <View key={task.id} style={styles.taskContainer}>
            <Image style={styles.taskIcon} source={require('./../images/icon-circle.png')}/>
            <Text style={styles.taskText}>{task.title}</Text>
          </View>
        )
      })
    )
  }

  render(){
    return (
      <View style={ styles.container }>
        <TaskHeader toBeCompleted={28}/>
        <View style={ styles.tasksContainer }>
          {this.renderTask()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tasksContainer: {
    backgroundColor: 'green',
    flex: 1
  },
  taskContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: '#E7E7E7'
  },
  taskIcon: {
    height: 25,
    width: 25,
    marginRight: 15
  },
  taskText: {
    fontSize: 21
  }
});
