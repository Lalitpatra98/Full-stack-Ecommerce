import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Cart from './pages/cart'
import Product from "./pages/Product";
import Order from "./pages/Order";
import PlaceOrder from "./pages/PlaceOrder";
import About from "./pages/About";
import LogIn from "./pages/LogIn";
function App() {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
        {/* Routes are  maintain history address  in url  */}
        {/* Route are give the path to Element */}

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/Product" element={<Product/>}/>
          <Route path="/Order" element={<Order/>}/>
          <Route path="/PlaceOrder" element={<PlaceOrder/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/LogIn" element={<LogIn/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
