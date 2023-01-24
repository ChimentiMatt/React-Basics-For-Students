import React from 'react'

const Todo = ({tasks, removeTask, toggleComplete}) => {
  return (
    <div className='tasks-column'>
        <label name='Todo List'>Todo List</label>
        {tasks.map( (task, id) => (
            <div key={id} className='task-row'>
                {task.completed === false &&
                    <>
                        <li>{task.name}</li>
                        <button onClick={() => removeTask(task)}>Delete</button>
                        <button onClick={() => toggleComplete(task)}>Toggle</button>
                    </>
                }
            </div>
        ))}
    </div>
  )
}

export default Todo
