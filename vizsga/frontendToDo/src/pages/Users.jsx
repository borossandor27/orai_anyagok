export default function Users() {
    const users=[
        {
            "user_id": 1,
            "name": "Ádám",
            "email": "adam@valahol.hu",
            "birthday": "2014-01-06T23:00:00.000Z"
        },
        {
            "user_id": 2,
            "name": "Éva",
            "email": "eva@valahol.hu",
            "birthday": "2008-04-09T22:00:00.000Z"
        }
    ]
  return (
    <div>
      <h1>Users</h1>
      <p>Regisztrált felhasználók</p>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>{user.name}</li>
        ))}
      </ul> 
    </div>
  );
}