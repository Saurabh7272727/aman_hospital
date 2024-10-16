import React from 'react'
import './BottomNav.scss';
import { useNavigate } from 'react-router-dom';
const BottomNav = () => {
    const Navi = useNavigate();
    return (
        <>
            <div className="middle">
                <h4>About</h4>
                <h4>Patient Care</h4>
                <h4>Health Information</h4>
                <h4 onClick={() => Navi("/auth/login")}>Login</h4>
                <h4 onClick={() => Navi("/auth/signup")}>SignUp</h4>
            </div>
        </>
    )
}

export default BottomNav;