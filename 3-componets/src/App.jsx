import { useState } from 'react'
import Profile from './components/Profile'


/**
 * Components are a huge part of React
 * 
 * In this lesson, there is a minimal example of a component.
 * In the src directory, a nested directory called components was made.
 * 
 * Inside this directory, a file with a capital first letter named Profile.jsx
 * is our component.
 * 
 * The component Profile uses the state variable name and its setter, setName, to
 * both display the name and change the value.
 * 
 * This is because we passed these two values as Props.
 * 
 * Look at the line reading <Profile name={name} setName={setName}/>
 * Profile is the name of the imported component
 * name={name} is defining what name will be called in the component (which is the same)
 * and then on the right hand side what value it will be.
 * 
 * setName={setName} passes the setter, so we can change the value of the name state in this component.
 * Now look in the file Profile.jsx
 * 
 */
function App() {
  const [name, setName] = useState('Jenny')

  return (
    <div className="App">
      <h1>Lesson 3: Components</h1>

      <Profile name={name} setName={setName}/>
    </div>
  )
}

export default App
