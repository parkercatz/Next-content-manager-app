import { useState } from 'react'
function CompA() {
  return <h1>CompA</h1>
}

function Home() {
  const [value, setValue] = useState(10)

  const changeValue = (incrementor) => {
    setValue(value + incrementor)
  }

  return (
    <>
      current Value: <h1>{value}</h1>
      <button onClick={() => changeValue(+1)}>+</button>
      <button onClick={() => changeValue(-1)}>-</button>
      <CompA />
    </>
  )
}

export default Home
