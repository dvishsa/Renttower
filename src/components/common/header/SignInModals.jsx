import React, { useState } from 'react';

const SignInModals = ({ onClose, setLoggedInUsername }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [error, setError] = useState('');
    const [modalOpen, setModalOpen] = useState(true);

    const handleSignIn = () => {
        if (!email) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        if (!password) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }

        if (email && password) {
            console.log('Successful sign-in');
            setModalOpen(false);
            setLoggedInUsername(email); // Update the logged-in state with the email
            onClose();
        } else {
            setError('Fill in all fields');
        }
    };

    const handleCancel = () => {
        setEmail('');
        setPassword('');
        setEmailError(false);
        setPasswordError(false);
        setError('');
        setModalOpen(false);
        onClose();
    };

    const handleClickOutside = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            setModalOpen(false);
            onClose();
        }
    };

    return (
        <>
            {modalOpen && (
                <div className="modal-overlay" onClick={handleClickOutside}>
                    <div className="modal">
                        <h2>Sign In</h2>
                        <form>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setEmailError(false); 
                                    }}
                                    className={emailError ? 'error' : ''}
                                    style={{ border: emailError ? '1px solid red' : '' }}
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setPasswordError(false);
                                    }}
                                    className={passwordError ? 'error' : ''}
                                    style={{ border: passwordError ? '1px solid red' : '' }}
                                />
                            </div>
                            <button type="button" onClick={handleSignIn}>
                                Sign In
                            </button>
                            <button type="button" onClick={handleCancel}>
                                Cancel
                            </button>
                            {error && <p className="error">{error}</p>}
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default SignInModals;
