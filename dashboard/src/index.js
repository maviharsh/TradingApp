import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

import Login from "../src/components/Login";
import Signup from "../src/components/Signup";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       
             <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
