import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Switch, Route, Router, Routes, BrowserRouter } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import React from "react";
import { signup} from './firebase-config';

function App() {
  return (
    
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/products/:id" element={<Product/>} />
        <Route exact path="/cart" element={<Cart/>} />
        

        </Routes>
    </>
  );

  
}

export default App;