import React from 'react'
import './LoginPage.scss'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const UseLocalStorage = (key, initialValue) => {

    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ?
            JSON.parse(storedValue) :
            initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};
const LoginPage = () => {
    const number = Math.floor((Math.random() * 100) + 1);
    const Navi = useNavigate();
    const [email, setEmail] = UseLocalStorage('email', 'default');
    const [password, setPassword] = UseLocalStorage('password', 'default');
    const LoginHandler = (event) => {
        event.preventDefault();
        if (email == event.target[0].value && password == event.target[1].value) {
            alert(`Welcome ${email}`);
            Navi(`/admin/${email}/${number}`);
        } else {
            alert("Something wrong : check your input field");
        }
    }

    return (
        <>
            <div className="login_page">
                <div className="login-container">
                    <h2>Login</h2>
                    <form method="POST" onSubmit={(e) => LoginHandler(e)}>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required />

                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;