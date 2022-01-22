import React, {useState} from "react";
import TaskList from './components/TaskList'
import NewTask from './components/NewTask'
import './App.css'

function App() {
  // state = {
  //   property: value,
  //   property2: value
  
  // }

  // const setTasks = () => {} some function
  const [tasks, setTasks] = useState([]); // tasks is the name of the value in the state 

  const [newTask, setNewTask] = useState('')
  
  // const array = [1,2 , 3, 4, 5] // 6 array.push(6)

  // array = [...array, 6]

  /**
   * function abc(x, y, z)
   * 
   * array = [1, 2, 3]
   * 
   * abc(...array)
   * 
   */

  const handleAddTask = function () {

    if (newTask) {

      setTasks([...tasks, newTask])
      setNewTask('')
      console.log(tasks)
    }
  }

  const handleInput = e => {
    console.log(e.target.value)
    setNewTask(e.target.value) //

  }

  const handleEditTask = id => {

    const oldTasks = tasks;

    let result = window.prompt('Enter your value', tasks[id])

    if (result !== tasks[id]) oldTasks[id] = result

    setTasks([...oldTasks])

  }

  const handleDeleteTask = id => {

    const oldTasks = tasks;

    oldTasks.splice(id, 1)
    setTasks([...oldTasks])
  }

  return (
    <div className="App">
      <TaskList 
        list={tasks}
        editCb={handleEditTask}  
        deleteCb={handleDeleteTask}
      />
      <NewTask 
        addCb={handleAddTask}
        inputCb={handleInput}
        inputValue={newTask}
      />
    </div>
  );
}

export default App;
