import { useEffect, useState } from "react"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect((e) => {
        if (e.target.type === 'submit') {
            const baseUrl = 'http://localhost:3000/Login'
            const body = JSON.stringify({ username, password })
            const headers = { 'Content-Type': 'application/json' }
            const method = 'POST'
            fetch(baseUrl, { method, headers, body })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    localStorage.setItem('token', data.token)
                })

        } else {
            const baseUrl = 'http://localhost:3000/Register'
            const body = JSON.stringify({ username, password })
            const headers = { 'Content-Type': 'application/json' }
            const method = 'POST'
            fetch(baseUrl, { method, headers, body })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    localStorage.setItem('token', data.token)
                })
        }
    }, []);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={handleUsernameChange} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={handlePasswordChange} />
            <button type="submit">Login</button>
            <button type="button">Register</button>
        </form>
    )
}
export default Login