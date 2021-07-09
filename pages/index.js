import { useState, useEffect } from 'react'
function CompA({ prop01 }) {
  return (
    <>
      <h1>CompA</h1>
      <div>Prop01: {prop01}</div>
    </>
  )
}

function Home() {
  const [value, setValue] = useState(10)

  useEffect(() => {
    console.log('use effect')
  }, [])

  return (
    <>
      current Value: <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
      <CompA prop01={value} />
    </>
  )
}

export default Home
