import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Axios from './pages/Axios'

function App() {
  return (
    <>
      <header>
        <img src="vite.svg" alt="Logo" />
        <h1>Esemény kezelő alkalmazás</h1>
      </header>
      <nav>
        <ul>
          <li><Link to="/">Nyitó lap</Link></li>
          <li><Link to="/users">Felhasználók</Link></li>
          <li><Link to="/axios">Felhasználók backendről</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/axios" element={<Axios />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2023 Esemény kezelő alkalmazás</p>
      </footer>
    </>
  )
}

export default App
