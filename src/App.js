import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

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

      <h3>Statistics:</h3>
      good: {good} <br/>
      bad: {bad} <br/>
      neutral: {neutral} <br/>
      total: {total} <br />
      average: {(good - bad)/total} <br />
      positive: {good/total*100}%
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

export default App;
