
import './App.css';
import {  Routes, Route } from 'react-router-dom';

import Header from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Account from './pages/account/Account'
import Cart from './components/cart/Cart'
import Product from './pages/product/Product'
import Help from './pages/help/help'
import Signup from './pages/account/Signup'
import Signin from './pages/account/Signin'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/help" element={<Help />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
      </Routes>
  
        <Footer />
    
    </div>
  );
}

export default App;
