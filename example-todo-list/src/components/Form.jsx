import { useState } from 'react'

const Form = ({addTasks}) => {
    const [inputValue, setInputValue ] = useState('')

    return (
    <div className='form'>
        <label name='add todo'>Add Todo</label>
        <div>
            <input onChange={(event) => setInputValue(event.target.value)} />
            <button onClick={() => {addTasks(inputValue)}}>Submit</button>
        </div>
    </div>
    )
}

export default Form
