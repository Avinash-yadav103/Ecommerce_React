import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Account from './pages/Account';
import HomeSlider from './components/HomeSlider';
import Footer from './components/Footer';
import Wishlist from './components/WIshlist';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import MyAccount from './components/MyAccount';

import './styles/global.css';

function App() {
  return (
    <>    
    {/* <HomeSlider /> */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/account" element={<Account />} /> */}
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/account/my-account" element={<MyAccount />} />
    </Routes>
    <Footer />

    </>

  );
}

export default App;