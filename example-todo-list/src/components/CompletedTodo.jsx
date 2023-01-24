const CompletedTodo = ({tasks, removeTask, toggleComplete}) => {
  return (
    <div className='tasks-column'>
        <label name='Completed List'>Completed List</label>
        {tasks.map( (task, id) => (
            <div key={id} className='task-row'>
                {task.completed === true &&
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

export default CompletedTodo
