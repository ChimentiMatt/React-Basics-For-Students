import { useState, useEffect } from 'react'

/**
 * With useEffect, a dependency array often is used in conjunction.
 * 
 * Dependency arrays are a concept that is tightly coupled to hooks in React (thus also to function components).
 * There are other Hooks that use dependency arrays such as useCallback, but useEffect is a good starting point for the concept
 * 
 * What are dependency arrays used for?
 * The dependency array basically tells the hook to "only trigger when the dependency array changes".
 * 
 * The first useEffect demonstrates this idea directly.
 * The second argument of useEffect is an array that is populated with the state variable counterTwo: , [counterTwo]
 * Inside the coding logic of this useEffect, setCounterOne uses setState to increment its value.
 * Since this first useEffect only triggers when the variable in the dependency array changes, counterOne increments every time counterTwo changes.
 * 
 * 
 * The second example of useEffect has an empty dependency array: , [] 
 * Having an empty dependency array is a common practice as it allows the useEffect to only run once
 * only when the component is mounted. 
 * 
 * This second example calls an API to get a random dad joke. 
 * We probably do not want to keep calling a API everyone time a component changes which is why this empty array is valuable.
 * The empty dependency array allows for the api call to only happen once.
 */


function App() {

  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)
  const [dadJoke, setDadJoke] = useState('')
    
    useEffect(() => {
      setCounterOne(counterOne + 1)
    }, [counterTwo])

    useEffect(() => {
      fetch('https://icanhazdadjoke.com', {
        headers: { Accept: "application/json"}
      })
      .then(response => response.json())
      .then(data => 
        setDadJoke(data.joke)
      );
      
    }, [])


    return (
      <div className="App">

        <p>Counter One: {counterOne}</p>
        <p>Counter Two: {counterTwo}</p>
        <button onClick={() => setCounterTwo(counterTwo +1)}>Increment CounterTwo</button>

        <h1>------------------------</h1>
        
        <p>Below is a Dad Joke from a Dad Joke API. Its fetch request is inside of a useEffect that has an empty dependency array. This allows for the API call to only happen once on mounting.</p>
        <br/>
        <p>{dadJoke}</p>
      </div>
    )
}

export default App
