import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React,{lazy,Suspense} from 'react'
import './App.css';
import './CSS/Fontaw.css';

import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import News from './components/News';
import Contact from './components/Contact';
import ShopDetails from './components/ShopDetails';
import BlogDetails from './components/BlogDetails';
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Cart2 from './components/Cart2';
import CartCheckout from './components/CartCheckout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopDetails" element={<ShopDetails />}/>
        <Route path="/blogDetails" element={<BlogDetails />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/cart2" element={<Cart2 />}/>
        <Route path="/cartcheckout" element={<CartCheckout />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
