import Login from './pages/Login'
import Protected from './pages/Protected'
import './App.css'

function App() {


  const token = localStorage.getItem('token');

  return (
    <>
      <h1>App</h1>
      {token ? <Protected /> : <Login />}

    </>
  )
}

export default App
