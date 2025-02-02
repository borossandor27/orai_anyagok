import UserCard from './components/UserCard'
import users from './data/users.json'
import './App.css'

function App() {
  return (
    <>
      <div>
        {users.map((user, index) => (
          
        <UserCard
          key={index}
          profilkep={user.profilkep} // Csak a kép URL-je
          nev={user.nev}
          email={user.email}
          telefonszam={user.telefonszam}
        />

        ))}
      </div>
    </>
  )
}

export default App
