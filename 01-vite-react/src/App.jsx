import { useState } from 'react'
import Example from './Example'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Example/>
  )
}

export default App