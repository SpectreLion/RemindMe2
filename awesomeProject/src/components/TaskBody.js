import React , {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class TaskBody extends Component<props>{
  constructor(props){
    super(props);
  }

  taskCheck(task){
    task.completed = (task.completed) ? false : true;
    this.forceUpdate()
  }

  render(){
    return(
      this.props.tasks.map( (task) => {
        return(
          <TouchableOpacity key={task.id}  style={styles.taskContainer} onPress={this.taskCheck.bind(this, task)}>
              {
                task.completed ?
                  <Image style={styles.taskIcon} source={require('./../images/icon-checked.png')}/> :
                  <Image style={styles.taskIcon} source={require('./../images/icon-circle.png')}/>
              }
              <Text style={styles.taskText}>{task.title}</Text>
          </TouchableOpacity >
        )
      })
    )
  }
}

const styles = StyleSheet.create({
  taskIcon: {
    height: 25,
    width: 25,
    marginRight: 15
  },
  taskText: {
    fontSize: 21
  },taskContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: '#E7E7E7'
  }
});
