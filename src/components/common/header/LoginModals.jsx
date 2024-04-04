import React, { useState } from 'react';

const LoginModals = ({ onClose, setLoggedInUsername }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        // Проверяем заполненность полей
        if (!username) {
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }

        if (!password) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }

        if (username && password) {
            if (username === 'admin' && password === 'admin') {
                setLoggedInUsername(username); // Set the logged in username in the parent component
                onClose();
            } else {
                setErrorMessage('Incorrect username or password');
            }
        }
    };

    const handleCancel = () => {
        setUsername('');
        setPassword('');
        setUsernameError(false);
        setPasswordError(false);
        setErrorMessage('');
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Login</h2>
                <form>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={usernameError ? 'error' : ''}
                            style={{ border: usernameError ? '1px solid red' : '' }}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={passwordError ? 'error' : ''}
                            style={{ border: passwordError ? '1px solid red' : '' }}
                        />
                    </div>
                    <button type="button" onClick={handleLogin}>
                        Login
                    </button>
                    <button type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default LoginModals;
