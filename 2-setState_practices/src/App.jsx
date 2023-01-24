import { useState } from 'react'

/**
* State is a different type of variable, and one we have to understand.
* 
* If we click on the button Increment Counter, which uses the increment function,
* the counter will correctly increment, counting up by 1.
* 
* However, if we click on the second button, the function it runs uses setState
* back to back, which we might assume will increase the counter each time by 1.
* It does not however. We still only increment by 1 each click.
* 
* This is because state is asynchronous which means it runs in a separate operation.
* If it was synchronous, the browser would often become unresponsive.
* 
* Think of setState being a que that takes in its current value. Since the que did not finish
* the value of count never increased.
* 
* The badIncrements values for count are always going to be identical because the que was still running
* and the state was not finished being set before attempting the next setState operation.
* 
* If you are running into issues with setState, you probably need to re think how you are using it.
* 
* The function badStopAtFive loops 10 times, and has a conditional 
* that will stop if the counter is 5
* 
* The condition will never be true as counter will be the previous value.
* If the counter starts at 0, each loop will be 0 + i
* therefor, counter never becomes 5 during the loops and
* becomes 9, which is i's value only after the setState que is finished 
* 
* The function stopAtFive uses a standard JS variable to handle this problem,
* and then it setState to 5 once the conditional is true.
*/
function App() {

  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const increment = () => {
    setCounter(counter +1)
  }

  const badIncrement = () => {
    setCounter(counter +1)
    setCounter(counter +1)
  }

  const badStopAtFive = () => {
    for (let i = 0; i < 10; i++){
      setCounter2(counter + i)

      if(counter === 5){
        alert('Number 5 found')
        break
      }
    }
  }

  const stopAtFive = () => {
    let num = counter
    for (let i = 0; i < 10; i++){
      num = i
      console.log(num)

      if(num === 5){
        alert('Number 5 found')
        setCounter2(5)
        break
      }
    }
  }

  return (
    <div className="App">
      <h1>Lesson 2: setState Practices</h1>

      <h3>Example 1. setState gone wrong</h3>

      <p>Counter: {counter}</p>

      <button onClick={increment}>Increment Counter</button>

      <button onClick={badIncrement}>Increment Counter Twice</button>

      <br/>
      <br/>

      <h3>Example 2. Loop until the count state is 5</h3>

      <p>Counter Number Two: {counter2}</p>

      <button onClick={badStopAtFive}>Bad stop at 5</button>

      <button onClick={stopAtFive}>Stop at 5</button>
    </div>
  )
}

export default App
