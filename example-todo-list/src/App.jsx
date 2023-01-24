import { useState } from 'react'
import CompletedTodo from './components/CompletedTodo'
import Form from './components/Form'
import Todo from './components/Todo'


function App() {
  const [idCounter, setIdCounter] = useState(2)
  const [tasks, setTasks] = useState(
    [
      {
        name: 'Eat Pizza',
        completed: false,
        id: 1
      },
      {
        name: 'Dress up cat',
        completed: true,
        id: 2
      }
    ]
  )

  const addTasks = (inputValue) => {
    setTasks(current => [...current, {
      name: inputValue,
      completed: false,
      id: idCounter +1
    }])

    setIdCounter(idCounter +1)
  }

  const removeTask = (targetValue) => {
    setTasks(current => current.filter(value => value.id !== targetValue.id))
  }

  const toggleComplete = (task) => {
    // Flip the current boolean
    task.completed = !task.completed

    // Make a copy of the array not in state
    let tasksArray = [...tasks]

    // Filter out the item that matches
    tasksArray = tasksArray.filter(obj => obj.id !== task.id)

    // Add the item into the non state array
    tasksArray.push(task)

    // Set state array
    setTasks(tasksArray)
  }

  return (
    <div className="App">
      <Form addTasks={addTasks}/>

      <div className='middle-content'>
        <Todo tasks={tasks} removeTask={removeTask} toggleComplete={toggleComplete}/>

        <CompletedTodo tasks={tasks} removeTask={removeTask} toggleComplete={toggleComplete}/>
      </div>

    </div>
  )
}

export default App
