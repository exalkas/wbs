import './App.css';
/**
 * useState:
 * accepts an initial value, returns 2 things: the state and the function used to update this state
 * syntax: (destructural assignment)[name of state, name of function to update the state] = 
 * useState (initial value)
 */
import React, {useState} from 'react' // useState is function. it accepts the initial value
import TaskList from './components/TaskList'
import NewTask from './components/NewTask'


// We need to store the tasks. Let's use an array

function App() {

  const [tasks, setTasks] = useState([]) // tasks is the name of the state
  const [taskText, setTaskText] = useState('')

  const handleAddTask = () => {
    setTasks([...tasks, taskText])
    setTaskText('')
    console.log('tasks are:', tasks)
  }

  const handleInput = e => {
    setTaskText(e.target.value)
    console.log('handle input=',e.target.value)
  }

  const handleDeleteTask = id => {
    
    const oldTasks = tasks;

    oldTasks.splice(id, 1)
    console.log('old tasks=', oldTasks)
    setTasks([...oldTasks])
    console.log('handleDelete: id=', id)
  }
  const handleEditTask = id => {
    
    const oldTasks = tasks;

    let result = window.prompt('Enter your value', tasks[id])

    if (result !== tasks[id]) oldTasks[id] = result

    setTasks([...oldTasks])
  }

  return (
    <div className="App">
      <TaskList 
        list={tasks} 
        deleteCb={handleDeleteTask}
        editCb={handleEditTask}
        />
      <NewTask 
        value={taskText}
        cb={handleInput} 
        buttonCb={handleAddTask}
        
        />
        
      
    </div>
  );
}

export default App;
