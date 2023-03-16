const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

const App = () => {
  const friends = [
    {name: 'Alejandro', age: 25},
    {name: 'Brad', age: 23},
  ]

  return (
    <>
    <h1>Greetings</h1>
      <Hello name = {friends[0].name} age = {friends[0].age}/>
    </>
  )
}

export default App