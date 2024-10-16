import React from 'react'
import './MiddleNav.scss'
import { FaSearch } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const MiddleNav = () => {
    const Navi = useNavigate();
    return (
        <>
            <div className="middle_Nav">
                <div className='img_logo'>
                    <img onClick={() => Navi('/')} src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/logo.svg" alt="logo_main_project" />
                </div>
                <div className='search_box'>
                    <input type="text" name="search" id="search" placeholder='Search Doctor or Hospital' /><button><FaSearch /></button>
                </div>
                <div className='contact_box'>
                    <label htmlFor="124">Emergency
                        <input type="text" name="" value={`1066`} id="124" />
                    </label>
                    <label htmlFor="123">
                        Apollo Lifeline {<MdPhoneInTalk />}
                        <input type="text" name="" value={`988888888`} id="123" />
                    </label>
                </div>
            </div>
        </>
    )
}

export default MiddleNav;