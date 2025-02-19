import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Account from './pages/Account';
import HomeSlider from './components/HomeSlider';
import Footer from './components/Footer';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import MyAccount from './components/MyAccount';
import Not from './components/Not';
import ProductDetail from './components/ProductDetail';

import './styles/global.css';

function App() {
  return (
    <>    
    {/* <HomeSlider /> */}
    <ProductDetail />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/account" element={<Account />} /> */}
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/account/my-account" element={<MyAccount />} />
        <Route path="*" element={<Not />} /> 
    </Routes>
    <Footer />

    </>

  );
}

export default App;