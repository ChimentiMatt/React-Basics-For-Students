import { useState } from 'react'

/**
* Below is a useState variable.
* 
* Notice how it was imported this hook on line 1.
* 
* If we want to use its value in HTML, we can render it with {name}.
* The current value will be what is shown on your page.
* 
* However, state variables must not be treated like a normal JS variable.
* Do not try to re assign its value with equals sign =.
* 
* If we want to change its value, which we often do, we must use setName.
* 
* Click on the button,
* It will trigger a function that uses setName and assigns the value to 'Sarah'.
* 
* Notice how the web page instantly updates the names value.
* 
* Next Click the second button that runs the function randomName.
* See how setName is used with simple logic to re assign the value.
*/
function App() {
  const [name, setName] = useState('Timothy')

  const changeName = () => {
    setName('Sarah')
  }

  const randomName = () => {
    const names = ['Jimmy', 'Sarah', 'Jill', 'Fred', 'Steff', 'Bob', 'Matt', 'Spider-man']
    const min = 0
    const max = names.length
    const newNameIndex = Math.floor(Math.random() * (max + min) + min)

    setName(names[newNameIndex])   
  }

  return (
    <div className="App">
      <h1>Lesson 1: Basics of State</h1>
      <p>Welcome {name}</p>

      <button onClick={changeName}>Change Name To Sarah</button>

      <br/>

      <button onClick={randomName}>Change To A Random Name</button>
    </div>
  )
}

export default App
