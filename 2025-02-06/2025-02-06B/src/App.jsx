import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')

  return (
    <>
      <form >

        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <p>Kapott szöveg: {text}</p>
      </form>
    </>
  )
}

export default App
