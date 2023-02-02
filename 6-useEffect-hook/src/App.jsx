import { useState, useEffect } from 'react'

/**
 * The useEffect hook is a core part of React
 * 
 * It allows for code to be executed on each time a component is updated
 * This means useEffect is ran on the follow
 * When component mounts
 * On every component render
 * On every component renders with a condition
 * and when a component unmounts. 
 * 
 * 
 * Make sure to import useEffect like in this file does on line 1.
 * 
 * For beginners, think of useEffect as code that automatically runs when
 * your component updates.
 * 
 * 
 * Note for future practices: 
 * useEffect can have side effects
 * Although it is powerful, newcomers to React will learn 
 * that it can cause issues if not implemented properly.
 * 
 * You may accidentals find yourself doing an api call forever until the api blocks you.
 * You may find you only want useEffect to run once
 * Or that React is telling you to update the dependance array.
 * Further useEffect practices will be in the next lesson 
 * 
 * Note on development mode:
 * You will find that normally, your app will log the first useEffect twice.
 * This is because React is still in "Strict Mode" for pre production. 
 * To make this lesson less confusing, I took React out of strict mode.
 * Know that the logic will not be repeated when this happens.
 */

function App() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("\nHello from useEffect")
    console.log("The current value of counter is " + counter)
  })

  return (
    <div className="App">
      <h4>View console for console.logs</h4>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter +1)}>+ 1</button>
    </div>
  )
}

export default App
