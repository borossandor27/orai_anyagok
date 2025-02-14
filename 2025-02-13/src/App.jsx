import { useState, useEffect } from 'react'
import axios from 'axios'
import MyButton from './componens/MyButton'
import './App.css'
const baseURL = 'https://retoolapi.dev/MVwfIW/data'


function App() {
  const [users, setUsers] = useState([]) // kezdeti üres tömb

  useEffect(() => {
    getAllUsers()
  }, []) // csak mountoláskor fusson le
  const getAllUsers = async () => {
    const { data } = await axios.get(baseURL) // adatok lekérése
    setUsers(data)
  }

  const createUser = async () => {
    const nev = document.getElementById('nev').value
    const fizetes = document.getElementById('fizetes').value
    const { data } = await axios.post(baseURL, { nev, fizetes })
    setUsers([...users, data])
  }
  const updateUser = async () => {
    const id = document.getElementById('id').value
    const nev = document.getElementById('nev').value
    const fizetes = document.getElementById('fizetes').value
    const { data } = await axios.put(`${baseURL}/${id}`, { nev, fizetes })
    setUsers(users.map(user => user.id === id ? data : user))
  }

  const fillForm = (id) => {
    const user = users.find(user => user.id === id)
    document.getElementById('id').value = user.id
    document.getElementById('nev').value = user.nev
    document.getElementById('fizetes').value = user.fizetes
  }

  return (
    <>
      <form>
        <fieldset>
          <legend>Kiválasztott felhasználó adatai</legend>
          <input type="hidden" name="id" id="id" />
          <input type="text" name='nev' id='nev' placeholder='Felhasználó neve' />
          <input type="number" name="fizetes" id="fizetes" placeholder='fizetés' />
        </fieldset>
        <MyButton color='green' onClick={createUser}>Küldés</MyButton>
        <MyButton color='red'>Módosítás</MyButton>
      </form>
      <table>
        <thead>
          <tr>
            <th>Név</th>
            <th>Fizetés</th>
            <th>Módosítás</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, nev, fizetes }) => (
            <tr key={id}>
              <td>{nev}</td>
              <td>{fizetes}</td>
              <td><MyButton color='blue' onClick={() => fillForm(id)}>Módosít</MyButton></td>
              <td><MyButton color='red'>Törlés</MyButton></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
