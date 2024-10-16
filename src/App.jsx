import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Home/HomePage';
import LoginPage from './Components/LoginPage/LoginPage.jsx';
import Footer from './Footer/Footer';
import NavTop from './Components/NavTop/NavTop';
import MiddleNav from './Components/MiddleNav/MiddleNav';
import BottomNav from './Components/BottomNav/BottomNav';
import SignUp from './Components/SignUp/SignUp';
import Admin from './Admin/Admin/Admin';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavTop />
        <MiddleNav />
        <BottomNav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth/login' element={<LoginPage />} />
          <Route path='/auth/signup' element={<SignUp />} />
          <Route path='/admin/:user/:number' element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App;