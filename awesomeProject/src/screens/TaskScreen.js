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
  TouchableHighlight,
  Modal
} from 'react-native';

import TaskHeader from './../components/TaskHeader';
import Task from './../components/TaskBody';
import AddTaskModal from './../modal/AddTaskModal';

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
          { id: 6, title:'La Waifu :3', completed: false }
        ],
        visibleModal:false
      }
  }

  showModal(){
    this.setState({visibleModal: true})
  }

  hideModal(){
    this.setState({visibleModal: false})
  }

  addTask(title){
    //Obtener el valor del titulo
    //Generar EL OBJETO{ID,TITULO,COMPLETED}
    //Generar e ID QUE ES UNA MALA PRACTICA
    //STEAR LA BANDERA DE COMPLETADO A FALSO POR default
    const id = 100+ this.state.tasks.length;
    const newTask ={id, title, completed:false};
    //COPIAR EL ARREGLO TASK ORIGINAL
    let tasks =[...this.state.tasks];
    //MANDAR LA NUEVA TAREA A LA COPIA DEL ARREGLO
    tasks.push(newTask);
    //ACTUALZIAR EL ESTADO
    this.setState({tasks});
  }

  updateTask(targeredId){
    //Copiar estado
    let currentTask =[...this.state.tasks];
    //Verficar el id del que quiero cambiar
    let taskToBeUpdated = currentTask.find( task => task.id === targeredId);
    //checar en que estado estado
    taskToBeUpdated.completed = !taskToBeUpdated.completed;
    //actualizar estado
    this.setState({tasks:currentTask});
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
        <TouchableHighlight style={styles.addTaskbutton} onPress ={()=>{this.showModal()}}>
          <Image style={styles.plusIcon} source={require('./../images/icon-plus.png')}/>
        </TouchableHighlight>
        <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={()=>{this.hideModal()}}
        visible={this.state.visibleModal}>
          <AddTaskModal
            addTask={this.addTask.bind(this)}
            hideModal={this.hideModal.bind(this)}/>
        </Modal>
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
