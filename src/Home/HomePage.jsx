import React from 'react'
import Herosection from '../Components/HeroSection/Herosection';
import Boxlist from './BoxList/Boxlist';
import DoctorList from './DoctorList/DoctorList';


const HomePage = () => {
    return (
        <>
            <Herosection />
            <Boxlist />
            <DoctorList />
        </>
    )
}

export default HomePage;