import 'react-native';
import TaskHeader from './../../src/components/TaskHeader';
import renderer from 'react-test-renderer';

//Mock Data
const MockDate = require('mockdate');
  MockDate.set('2018-01-10T12:00:00'),
  taskToBeCompleted = 10,
  TaskHeaderClass = new TaskHeader({taskToBeCompleted});

describe('Task Header Component -',()=>{
  afterAll( () =>{
    MockDate.reset();
  });

  //it('should reder correctly',() =>{
    //const component = renderer.create(
      //<TaskHeader taskToBeCompleted={taskToBeCompleted}/>
  //  ).toJSON();
  //  expect(component).toMatchSnapshot();
  //  expect
  //});

  it('should return a current date', () =>{
    expect(TaskHeaderClass.getFormatedDate()).toBe('JUEVES 10 DE ENERO DE 2018');
  });
});
