import React from 'react'
import './Herosection.scss';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const Herosection = () => {

    const images = [
        'https://cdn.apollohospitals.com/dev-apollohospitals/2024/09/World_Heart_Day_Web.jpg',
        'https://cdn.apollohospitals.com/dev-apollohospitals/2022/05/apollo-proton_v-2.jpg',
        'https://cdn.apollohospitals.com/dev-apollohospitals/2023/04/ApolloProhealth.jpg',
        'https://cdn.apollohospitals.com/dev-apollohospitals/2024/09/41Anniversary_banner_web.jpg',
    ];


    return (
        <>
            <div className="slide-container">
                <Zoom scale={0.9}>
                    {
                        images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)
                    }
                </Zoom>
            </div>
        </>
    )
}

export default Herosection;