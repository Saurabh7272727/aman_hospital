import React from 'react'
import './SignUp.scss';
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

const SignUp = () => {

    const [Name, setName] = UseLocalStorage('name', 'default');
    const [Email, setEmail] = UseLocalStorage('email', 'default');
    const [Password, setPassword] = UseLocalStorage('password', 'default');
    const Navi = useNavigate();


    const pageSender = () => {
        Navi('/auth/login');
    }

    const SubmitHandler = (event) => {
        if (event.target[1].value == Email) {
            Navi('/email_failed');
            return alert("Your email address is already regestablished");
        }
        event.preventDefault();
        setName(`${event.target[0].value}`);
        setEmail(`${event.target[1].value}`);
        setPassword(`${event.target[2].value}`);
        alert("You sucessfully registered: fill the form with your login information");
        setTimeout(() => { pageSender(); }, 2000);

    }

    return (
        <>
            <div className="Sigup_page_main">
                <div className="container">
                    <h1>Create Account</h1>
                    <form method="POST" onSubmit={(e) => SubmitHandler(e)}>
                        <div className="input-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="input-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="input-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div className="input-group">
                            <label for="confirm-password">Confirm Password</label>
                            <input type="password" id="confirm-password" name="confirm-password" required />
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                    <p>Already have an account? <a href="#" onClick={() => Navi('/auth/login')}>Login here</a></p>
                </div>
            </div>
        </>
    )
}

export default SignUp;