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
            <Text>Aquí una imagen bonita</Text>
          </View>
          <View style={styles.body}>
            <TextInput
              placeholder={'Título de la tarea'}
              onChangeText={ ( text )=>{ this.setState({ taskTitle: text })  } }
              style={styles.input}/>
            <TouchableHighlight onPress={ ()=>{ this.props.addTask( this.state.taskTitle ) } }>
              <Text>AGREGAR</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={ ()=>{ this.props.hideModal() } }>
              <Text>CANCELAR</Text>
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
  container: {
    height: 300,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  input: {
    fontSize: 30
  }
});
