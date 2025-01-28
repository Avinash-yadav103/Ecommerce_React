import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Account from './pages/Account';
import './styles/global.css';

function App() {
  return (
    <>    
    {/* <Home /> */}
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
    </Routes>
    </>

  );
}

export default App;