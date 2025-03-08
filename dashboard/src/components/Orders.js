import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {  toast } from "react-toastify";


const Orders = () => {
  
  const [orders,setOrders]=useState([]);

  useEffect(()=>{
      const getOrders=async()=>{
        await axios.get("https://tradingapp-backend.onrender.com/getorders",{ withCredentials: true })
        .then((response)=>{
           console.log(response.data.message);
           setOrders(response.data.message);
        })
        .catch((err)=>{
          toast.error("Error in Fetching Orders")
             console.log(err);
        })
      }

      getOrders();
  },[])

  

    if(orders.length===0)
      {return(
      <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to="/summary" className="btn">
          Get started
        </Link>
      </div>
    </div>
      )
    }
    else
    {
    return(
      <>
      <h3 className="title">Orders({orders.length})</h3>

      <div className="order-table">
        <table>
          
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Mode</th>
          </tr>
          
          {orders.map((order,index)=>{
             
            return(
             <tr key={index}>
              <td>{order.name}</td>
              <td>{order.price}</td>
              <td>{order.qty}</td>
              <td>{order.mode}</td>
              </tr>
            );
          })}
          
        </table>
      </div>

      </>
    )
  };
};

export default Orders;
