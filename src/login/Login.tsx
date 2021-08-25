import { loginUser } from './login-service';

function Login() {
    return (
        <>
            <label htmlFor="username">Username:</label>
            <input id="username"></input>
            <label htmlFor="password">Password:</label>
            <input id="password"></input>

            <button onClick={() => loginUser({ username: 'nate', password: 'nate' })}>Login</button>
        </>
    );
}

export default Login;
