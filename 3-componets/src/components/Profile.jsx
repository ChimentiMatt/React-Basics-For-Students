/**
 * The first line: const Profile = ({name, setName}) => {...
 * importantly allows the name state and the setter into this component.
 * If they were not passed in as props, our program would break.
 * 
 * We now have access to both the name value and the setName setter
 * which this component uses by displaying the name and then by
 * changing the setName in the function toggleName
 * 
 * Importantly, the states exist at the bottom level. In React,
 * we always prop drill upwards through components. We do not go back down.
 * 
 * We could can pass functions into our component which later examples will demonstrate.
 */


const Profile = ({name, setName}) => {

  const toggleName = () => {
    if (name === 'Jenny'){
      setName('Bob')
    }
    else if (name === 'Bob'){
      setName('Jenny')
    }
  }

  return (
    <div>
      <h3>Hello {name}</h3>

      <button onClick={toggleName}>Toggle Name</button>
    </div>
  )
}

export default Profile
