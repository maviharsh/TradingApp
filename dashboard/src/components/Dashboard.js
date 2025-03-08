import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import { useNavigate } from "react-router-dom";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import {GeneralContextProvider} from "./GeneralContext";
import axios from "axios";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Dashboard = () => {

  const navigate=useNavigate();

  useEffect(()=>{
        const authstatus=async()=>{
          await axios.get("http://localhost:3000/islogin",{ withCredentials: true })
          .then((response)=>{
            console.log(response.data.status);
            if(response.data.status)
            navigate("/summary");
            else
            navigate("/");
          })
          .catch((err)=>{
            navigate("/");
            console.log(err);
          })   
        }

        authstatus();
  },[]) 

  return (
    <div className="dashboard-container">
           <GeneralContextProvider>
             <WatchList />
            </GeneralContextProvider>
      <div className="content">
      <ToastContainer />
        <Routes>
          <Route path="/summary" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
