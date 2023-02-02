import { useState } from 'react'

/**
 * In React, we can put expression right into our XML
 * 
 * In this example, if the state name is longer than 4 characters,
 * different XML or code will be rendered
 * 
 * If the name is < 5, a message stating the name must be longer will be rendered.
 * If the name is >= 5, a welcome message will be rendered.
 * 
 * Note the syntax. The begins with {}
 * Inside the brackets, we put our condition,
 * If this condition is true what follows the && is rendered
 * 
 * Note, there must be a parent container for the elements. 
 * In these examples, the parent is both a <p> tag, but any 
 * html container will do.
 * 
 * 
 * Other conditional rendering can be preformed as well. 
 * A Ternary is also possible.
 * If you are unfamiliar with a Ternary you can read about them in the link below
 * https://www.w3schools.com/react/react_es6_ternary.asp
 */

function App() {
  const [name, setName] = useState("Jim")

  return (
    <div className="App">
      <label name='name'>Enter your Name</label>
      <input onChange={(event) =>setName(event.target.value)}></input>

      {name.length < 5 && <p>Error: Name {name} must be longer than 4 characters</p>}

      {name.length >= 5 && <p>Welcome {name}!</p>}

    </div>
  )
}

export default App
