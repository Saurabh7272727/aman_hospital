import React from 'react'
import './DoctorList.scss';


const DoctorList = () => {
    return (
        <>
            <div className="doctor_container">
                <div className="img_doctor">
                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/speciality_ah.webp" alt="" />
                </div>
                <div className="text_slide_img">
                    <h1>
                        Explore our Centres of Clinical Excellence
                    </h1>
                    <br />
                    <hr />
                    <br />
                    <p>Apollo Hospitals has dedicated Centres of Excellence for several key specialties and super specialties. They are unique and state of the art facilities spread across several of the Apollo hospital locations and each Centre of Excellence stands out as a citadel of world class clinical outcomes.Learn about the world class health care we provide</p>
                </div>
            </div>
        </>
    )
}

export default DoctorList;