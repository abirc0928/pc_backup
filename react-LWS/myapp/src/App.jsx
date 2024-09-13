import { useState } from 'react'
import Clock from './component/Clock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Clock locale="bn-BD"></Clock>

    </>
  )
}

export default App
