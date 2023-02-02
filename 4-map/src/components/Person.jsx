// Note. singlePerson was passed into the component. As each component was mapped, it contains a different item in the array of objects.

const Person = ({singlePerson}) => {
  return (
    <div>
      <p>Name:{singlePerson.name}</p>
      <p>City: {singlePerson.city}</p>
      <p>State {singlePerson.state}</p>
      <p>------</p>
    </div>
  )
}

export default Person
