/*
*TaskScreen
*/

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import TaskHeader from './../components/TaskHeader';
import Task from './../components/TaskBody';

export default class TaskScreen extends Component<props> {

  constructor(props){
      super(props);
      this.state = {
        tasks: [
          { id: 1, title:'Compar Leche', completed: false },
          { id: 2, title:'Sacar Basura', completed: false },
          { id: 3, title:'Lavar Platos', completed: false },
          { id: 4, title:'Salir de Fiesta', completed: false },
          { id: 5, title:'Ganar Fornite', completed: false },
          { id: 6, title:'La Waifu :3', completed: false },

        ]
      }
  }

  updateTask(targeredId){
    //Copiar estado
    let currentTask =[...this.state.tasks];
    //Verficar el id del que quiero cambiar
    let taskToBeUpdated = currentTask.find( task => task.id === targeredId);
    //checar en que estado estado
    taskToBeUpdated.completed = !taskToBeUpdated.completed;
    //actualizar estado
    this.setState({task:currentTask});
  }

  calculateTaskToBeCompleted(){
    let count = 0;
    this.state.tasks.forEach(task =>{
      if(!task.completed){
        count++;
      }
    });
    return count;
  }

  renderTask(){
    return(
      this.state.tasks.map((task)=>{
          return(
            <Task key= {task.id} task={task} updateTask={this.updateTask.bind(this)} />
          )
      })
    )
  }

  render(){
    return (
      <View style={ styles.container }>
        <TaskHeader toBeCompleted={this.calculateTaskToBeCompleted()}/>
        <ScrollView style={ styles.tasksContainer }>{this.renderTask()}</ScrollView>
        <TouchableHighlight style={styles.addTaskbutton}>
          <Image style={styles.plusIcon} source={require('./../images/icon-plus.png')}/>
        </TouchableHighlight>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tasksContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  addTaskbutton:{
    backgroundColor: '#ED184A',
    width:66,
    height:66,
    borderRadius:33,
    position: 'absolute',
    bottom:20,
    right:15,
    alignItems:'center',
    justifyContent:'center'
  },
  plusIcon:{
    width:30,
    height:30
  }

});
