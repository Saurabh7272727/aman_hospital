import React from 'react'
import './NavTop.scss';
import { FaSchoolCircleExclamation } from "react-icons/fa6";
const NavTop = () => {
    return (
        <>
            <div className="nav_top_section">
                <h1><FaSchoolCircleExclamation />Privacy policy</h1>
                <h1>Disclaimer</h1>
                <h1>Contact</h1>
            </div>
        </>
    )
}

export default NavTop;