import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Account from './pages/Account';
import Footer from './components/Footer';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import MyAccount from './components/MyAccount';
import Not from './components/Not';
import ProductDetail from './components/ProductDetail';
import Navigation from './components/Navigation';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

import './styles/global.css';

function App() {
  return (
    <>    
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/my-account" element={<MyAccount />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Not />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;