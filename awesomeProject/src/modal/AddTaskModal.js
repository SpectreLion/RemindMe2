/**
 * AddTasksModal
 *
 */

import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TextInput
} from 'react-native';

export default class AddTaskModal extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      taskTitle: ''
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.logo} source={require('./../images/remindMe-logo.png')}/>
          </View>
          <View style={styles.body}>
            <Text style={styles.addText}>Agregar Tarea</Text>
            <TextInput
              onChangeText={ ( text )=>{ this.setState({ taskTitle: text })  } }
              style={styles.input}/>
            <TouchableHighlight style={styles.acceptButton} onPress={ ()=>{ this.props.addTask( this.state.taskTitle ) } }>
              <Text style={styles.buttonAcceptText}>AGREGAR</Text>
            </TouchableHighlight>
            <TouchableHighlight  style={styles.cancelButton} onPress={ ()=>{ this.props.hideModal() } }>
              <Text  style={styles.buttonCancelText}>CANCELAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, .35)'
  },
  header:{
    height:200,
    backgroundColor: 'rgb(237,24,74)',
    alignItems: 'center'
  },
  logo: {
    width: 285,
    height: 75,
    marginTop: 60,
  },
  container: {
    height: 475,
    width: 325,
    backgroundColor: 'white'
  },
  body:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    fontSize: 28,
    width: 280,
    textAlign: 'center'
  },
  acceptButton: {
    height: 55,
    width: 280,
    padding: 17,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgb(237,24,74)',
    borderRadius: 27,
    backgroundColor: 'rgb(237,24,74)',
    marginTop: 17,
  },
  cancelButton: {
    height: 55,
    width: 280,
    padding: 17,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgb(237,24,74)',
    borderRadius: 27,
    marginTop: 17,
  },
  buttonAcceptText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center'
  },
  buttonCancelText: {
    color: 'rgb(237,24,74)',
    fontSize: 17,
    textAlign: 'center'
  },
  addText:{
    fontSize: 16,
    color: '#A0A0A0',
    marginTop: 6
  }
});
