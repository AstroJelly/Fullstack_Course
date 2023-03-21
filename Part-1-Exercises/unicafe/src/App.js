import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    setTotal(total + 1)
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setTotal(total + 1)
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setTotal(total + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  if (props.total===0) {
    return (
      <>
        <div>No feedback given</div>
      </>
    )
  }
  return (
    <table>
      <tbody>
        <tr><StatisticLine text="good" value={props.good} /></tr>
        <tr><StatisticLine text="neutral" value={props.neutral} /></tr>
        <tr><StatisticLine text="bad" value={props.bad} /></tr>
        <tr><StatisticLine text="all" value={props.total} /></tr>
        <tr><StatisticLine text="average" value={(props.good - props.bad)/props.total} /></tr>
        <tr><StatisticLine text="positive" value={props.good/props.total * 100} /></tr>
      </tbody>
    </table>
  )
}

const StatisticLine = ({text, value}) => {
  if (text==="positive") {
    return (
      <>
        <td>{text}</td>
        <td>{value}%</td>
      </>
    )
  }
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  )
}

export default App;