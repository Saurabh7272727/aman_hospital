import React from 'react'
import './Footer.scss';
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const Navi = useNavigate();
    // https://www.facebook.com/TheApolloHospitals
    return (
        <>
            <div className="footer">
                <div className="footer_first_box">
                    <a href="https://www.facebook.com/TheApolloHospitals"><span><CiFacebook /> FaceBook</span></a>
                    <span><CiInstagram /> Instagram</span>
                    <span><FiYoutube /> Youtube</span>
                </div>
                <div className="footer_second_box">
                    <h4>© Copyright 2024. Apollo Hospitals Group. All Rights Reserved.</h4>
                    <p>Creator Names -</p>
                    <p>Aman Dubey</p>
                    <p>Khushi Chaudhary</p>
                    <p>Anchal Tiwari</p>
                </div>
            </div>
        </>
    )
}

export default Footer;