import React, { use, useEffect, useState } from "react";
import axios from "axios";

export default function Axios() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const url = "http://localhost:3000/users";
            try {
                const response = await axios.get(url);
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
      }, []);
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