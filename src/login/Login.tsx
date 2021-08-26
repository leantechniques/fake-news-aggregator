import { useState } from 'react';
import { loginUser } from './login-service';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <label htmlFor="username">Username:</label>
            <input id="username" value={username} onChange={(event) => setUsername(event.target.value)}></input>
            <label htmlFor="password">Password:</label>
            <input id="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>

            <button onClick={() => loginUser({ username: username, password: password })}>Login</button>
        </>
    );
}

export default Login;
