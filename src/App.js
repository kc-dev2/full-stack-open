import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistic = ({text, value}) => <div>{text}: {value}</div>

const Statistics = ({good, bad, neutral, total}) => {
  if(total!==0) {
    return (
      <>
        <h3>Statistics:</h3>
        <Statistic text="good" value={good} />
        <Statistic text="bad" value={bad} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="total" value={total} />
        <Statistic text="average" value={(good - bad)/total} />
        <Statistic text="positive" value={String(good/total*100) + "%"} />
      </>
    )
  }
  return (
    <>
      <h3>Statistics:</h3>
      <p>No feedback given</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }


  return (
    <div>
      <h3>Give feedback: </h3>
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleBad} text="Bad"/>
      <Button onClick={handleNeutral} text="Neutral"/>

      
      <Statistics good={good} bad={bad} neutral={neutral} total={total}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

export default App;
