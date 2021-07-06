import { useState } from 'react'
function CompA() {
  return <h1>CompA</h1>
}

function Home() {
  const [value, setValue] = useState(10)
  const incrementValue = () => {
    setValue(value + 1)
  }
  const decrementValue = () => {
    setValue(value - 1)
  }
  return (
    <>
      current Value: <h1>{value}</h1>
      <button onClick={incrementValue}>+</button>
      <button onClick={decrementValue}>-</button>
      <CompA />
    </>
  )
}

export default Home
