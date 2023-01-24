/**
 * The first line: const Profile = ({name, setName}) => {...
 * importantly allows the name state and the setter into this component.
 * If they were not passed in as props these values would be undefined.
 * 
 * We now have access to both the name value and the setName setter
 * which this component uses by displaying the name and then by
 * changing the name using setName in the function toggleName.
 * 
 * Importantly, the states exist at the bottom level and we pass it up into components. 
 * With React, we always prop drill upwards through components. We do not go back down.
 * 
 * We can also pass functions into our component which later examples will demonstrate.
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
