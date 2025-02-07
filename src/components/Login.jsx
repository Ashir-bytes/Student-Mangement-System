import { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Login({ handleLogin }) {
    const UserLogin = [
        { User: "Admin", password: "123456" },
        { User: "Admin", password: "123456" },
        { User: "user", password: "123456" }
    ];

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleusernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlepasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginUser = (e) => {
        e.preventDefault();
        setError('');

        if (!username || !password) {
            setError('Please enter both username and password');
            return;
        }

        const user = UserLogin.find(data => data.User === username && data.password === password);

        if (user) {
            localStorage.setItem("SET_USER_LOGIN", "true");
            handleLogin();
        } else {
            setError('Invalid username or password');
        }
        let datafetch = JSON.parse(localStorage.getItem("SET_USER_SIGN_Data")) || {};
        console.log(datafetch.username, datafetch.password);
        if (datafetch.username && datafetch.password) {
            localStorage.setItem("SET_USER_LOGIN", "true");
            handleLogin();
            
        }

    };

    return (
        <>
            <form onSubmit={handleLoginUser}>
                <div className="login">
                    <div className="flex">
                        <h1>Login</h1>
                        <input type="text" placeholder="Username"
                            value={username}
                            onChange={handleusernameChange}
                        />
                        <input type="password" placeholder="Password"
                            value={password}
                            onChange={handlepasswordChange} />
                        {error && <p className="error">{error}</p>}
                        <button type="submit">Login</button>
                    </div>
                </div>
            </form>
        </>
    );
}
Login.propTypes = {
    handleLogin: PropTypes.func.isRequired,
};

export default Login;