import { useState } from 'react'
import Person from './components/Person'

/**
 * Mapping data is a huge part of React
 * 
 * .map() is a method commonly used for rendering a list of data 
 * By mapping into a component, each component now has access to the data 
 * that would apply to that single arrays item. 
 * The first Person component would contain the first item of people.
 * The second Person component would contain the second item of people.
 * 
 * 
 * Syntax of .map()
 * 
 * In order to map, the { } must surround the code
 * it begins state.map()
 * 
 * Inside the state.map() we declare the single item's name and an option second argument for an id or index
 * 
 * 
 * Importantly, we need to pass the item into the component. Notice how in Person.jsx the component has ({singlePerson}) on 
 * its definition line.
 * 
 * Map also needs a way of tracking what element its working with.
 * This is why we have the key={id}
 * React uses this verify each instance
 * 
 * If you do not put a key on the parent container on .map(), you will get a warning
 * You will also experience bugs as your program is not sure what element it is referring to on manipulation 
 * 
 */

function App() {
  const [people, setPeople] = useState([ 
    {
      name: 'Sarah',
      state: 'Or',
      city: 'Salem'
    },
    {
      name: 'Greg',
      state: 'Tx',
      city: 'Austin'
    }
  ])

  return (
    <div className="App">
      <h3>The state named 'people' is being mapped over with .map()</h3>
      <h3>This creates a single instance of the component Person.jsx per each item in the state array</h3>
      <h3>The item which was declared singlePerson in the .map() is being passed into the component. Now, the entirety of what should belong per item is accessible in each component rendered</h3>
      
      <h1>------------------------</h1>

      {people.map((singlePerson, id) => (
        <Person key={id} singlePerson={singlePerson}/>
      ))}

      <h1>------------------------</h1>
    </div>
  )
}

export default App
