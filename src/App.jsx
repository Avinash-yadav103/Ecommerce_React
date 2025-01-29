import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Account from './pages/Account';
import HomeSlider from './components/HomeSlider';
import Footer from './components/Footer';

import './styles/global.css';

function App() {
  return (
    <>    
    {/* <HomeSlider /> */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
    </Routes>
    <Footer />

    </>

  );
}

export default App;