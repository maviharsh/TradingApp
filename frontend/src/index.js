import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "../src/landing_page/home/Home";
import ProductPage from "../src/landing_page/products/ProductPage";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "../src/landing_page/signup/Signup"; 
import AboutPage from "../src/landing_page/about/AboutPage"; 
import SupportPage from "../src/landing_page/support/SupportPage"; 
import PricingPage from "../src/landing_page/pricing/Pricing"; 
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import PageNotFound from './landing_page/PageNotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
   <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/signup" element={<Signup/>}></Route>
       <Route path="/about" element={<AboutPage/>}></Route>
       <Route path="/support" element={<SupportPage/>}></Route>
       <Route path="/pricing" element={<PricingPage/>}></Route>
       <Route path="/products" element={<ProductPage/>}></Route>
       <Route path="*" element={<PageNotFound/>}></Route>


   </Routes>
   <Footer />
  </BrowserRouter>
);
