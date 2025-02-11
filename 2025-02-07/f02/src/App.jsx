import { useState } from 'react'
import './App.css'

function App() {
  const [meter, setMeter] = useState(0)
  const [millimeter, setMillimeter] = useState(0)
  return (
    <>
      <h1>Átváltás</h1>
      <p>Átváltás méterről milliméterre.</p>
      <form>
        <input type="number" value={0.0} onChange={(e) => console.log(e)} />
        <button>Átváltás</button>
      </form>
      <p>{meter} méter = {millimeter} milliméter</p>
    </>
  )
}

export default App
